import { HttpException, HttpStatus, HttpVersionNotSupportedException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import Employee from './employee.entity';


@Injectable()
export default class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) { }

  async getEmployeeById(id: number) {
    const employee = await this.employeeRepository.findOne({
      where: { id, }
    })
    if (employee) {
      return employee
    }
    throw new HttpException('Employee with this id does not exist', HttpStatus.NOT_FOUND)
  }

  async createEmployee(employeeData: CreateEmployeeDto) {
    const newEmployee = this.employeeRepository.create(employeeData);
    await this.employeeRepository.save(newEmployee);
    return newEmployee;
  }
}
