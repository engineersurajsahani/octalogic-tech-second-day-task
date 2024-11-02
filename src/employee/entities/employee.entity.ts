import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Employee extends BaseEntity { 
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the employee' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The first name of the employee' })
  firstName: string;

  @Column()
  @ApiProperty({ description: 'The last name of the employee' })
  lastName: string;

  @Column()
  @ApiProperty({ description: 'The email address of the employee' })
  email: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @ApiProperty({ description: 'The salary of the employee', example: 50000.00 })
  salary: number;

  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;
}
