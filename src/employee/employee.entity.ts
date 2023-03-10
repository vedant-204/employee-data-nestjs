import Task from "src/task/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Employee {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public phone: string;

  @Column()
  public hireDate: Date;

  @Column()
  public position: string;

  @OneToMany(() => Task, (tasks: Task) => tasks.assignee)
  public tasks?: Task[]
}

export default Employee;
