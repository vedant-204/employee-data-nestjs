import Employee from "src/employee/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  dueDate: Date;

  @Column()
  emplyeeId: number;

  @ManyToOne(() => Employee, (assignee: Employee) => assignee.tasks)
  public assignee: Employee;
}

export default Task;
