import { ApiProperty } from '@nestjs/swagger';
import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
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
}
