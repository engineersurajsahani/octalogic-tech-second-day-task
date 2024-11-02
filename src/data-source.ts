import { DataSource } from 'typeorm';
import { Employee } from './employee/entities/employee.entity'; 
import { Company } from './company/entities/company.entity'; 

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',          
  password: 'root',             
  database: 'employee_db',     
  entities: [Employee, Company], 
  migrations: ['src/migrations/*.ts'],
  synchronize: true,           
});

export default dataSource;
