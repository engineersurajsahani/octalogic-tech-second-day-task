import { Employee } from '../../employee/entities/employee.entity';
import { BaseEntity } from '../../employee/entities/base.entity';
export declare class Company extends BaseEntity {
    id: number;
    name: string;
    address: string;
    employees: Employee[];
}
