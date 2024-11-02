import { DataSource } from 'typeorm';
import { Employee } from './employee/entities/employee.entity'; // Adjust path accordingly
const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',          // Update as needed
  password: 'root',          // Update as needed
  database: 'employee_db',       // Update as needed
  // entities: ['src/**/**/*.entity.ts'],
  entities: [Employee],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,            // Disable in production, use migrations
});

export default dataSource;