import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
import { BaseEntity } from '../../employee/entities/base.entity';

@Entity()
export class Company extends BaseEntity { 
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the company' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The name of the company' })
  name: string;

  @Column()
  @ApiProperty({ description: 'The address of the company' })
  address: string;

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];
}
