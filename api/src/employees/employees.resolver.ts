import { Resolver, ResolveField, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { Employee } from './models/employee.model';
import { EmployeesService } from './employees.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { LoginEmployeeInput } from './dto/login-employee.input';

@Resolver(() => Employee)
export class EmployeesResolver {
    constructor(
        private employeesService: EmployeesService,
    ) { }

    @Query(() => [Employee], { name: 'employees' })
    async findAll() {
        return this.employeesService.findAll();
    }

    @Query(() => Employee, { name: 'employeeInfo' })
    async findOneByEmployeeId(@Args('employeeId', { type: () => Int }) employeeId: number) {
        return this.employeesService.findOneById(employeeId);
    }

    @Query(() => Employee, { name: 'employeeId' })
    async findEmployeeId(@Args('loginEmployeeInput') loginEmployeeInput: LoginEmployeeInput) {
        return this.employeesService.findEmployeeId(loginEmployeeInput);
    }

    @Mutation(() => Employee, { name: 'createEmployee' })
    createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
        return this.employeesService.create(createEmployeeInput);
    }
}