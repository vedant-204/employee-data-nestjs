import { HttpException, HttpStatus, HttpVersionNotSupportedException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resourceUsage } from 'process';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import UpdateEmployeeDto from './dto/updateEmployee.dto';
import Employee from './employee.entity';


@Injectable()
export default class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) { }

  getAllEmplyees() {
    return this.employeeRepository.find();
  }

  async getEmplyeesById(id: number) {
    const employee = this.employeeRepository.findOne(
      {
        where: { id, }
      }
    );
    if (employee) {
      return employee;
    }
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }

  async createEmployee(employee: CreateEmployeeDto) {
    const newEmployee = this.employeeRepository.create(employee);
    await this.employeeRepository.save(newEmployee);
    return newEmployee;
  }

  async updateEmployee(id: number, employee: UpdateEmployeeDto) {
    await this.employeeRepository.update(id, employee);
    const updatedEmployee = await this.employeeRepository.findOne({
      where: { id, }
    })
    if (updatedEmployee) {
      return updatedEmployee;
    }
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }

  async deleteEmployee(id: number) {
    const deleteResponse = await this.employeeRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }
  }
}
