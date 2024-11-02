import { Company } from '../../company/entities/company.entity';
import { BaseEntity } from './base.entity';
export declare class Employee extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    salary: number;
    company: Company;
}
