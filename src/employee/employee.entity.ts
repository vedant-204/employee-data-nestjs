import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

export default Employee;
