// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { EmployeeModule } from './employee/employee.module';

// @Module({
//   imports: [EmployeeModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module'; 
import { Employee } from './employee/entities/employee.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'postgres',         
      password: 'root',         
      database: 'employee_db',
      entities: [Employee], 
      synchronize: true, 
    }),
    EmployeeModule,
  ],
})
export class AppModule { }

