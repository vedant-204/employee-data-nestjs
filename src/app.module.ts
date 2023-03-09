import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeModule } from './employee/employee.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [EmployeeModule, TaskModule],
  controllers: [AppController, EmployeeController],
  providers: [AppService],
})
export class AppModule {}
