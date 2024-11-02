import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const newCompany = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(newCompany);
  }

  async findAll(): Promise<Company[]> {
    return this.companyRepository.find({ relations: ['employees'] }); // Fetch employees as well
  }

  async findOne(id: number): Promise<Company> {
    return this.companyRepository.findOne({ where: { id }, relations: ['employees'] });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    await this.companyRepository.update(id, updateCompanyDto);
    return this.findOne(id);
  }

  // async remove(id: number): Promise<void> {
  //   await this.companyRepository.delete(id);
  // }

  async remove(id: number): Promise<void> {
    await this.companyRepository.softDelete(id); // Use soft delete
  }
}
