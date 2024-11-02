import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(newEmployee);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({ relations: ['company'] });
  }

  async findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id }, relations: ['company'] });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    await this.employeeRepository.update(id, updateEmployeeDto);
    return this.findOne(id);
  }

  // async remove(id: number): Promise<void> {
  //   await this.employeeRepository.delete(id);
  // }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.softDelete(id);
  }

}
