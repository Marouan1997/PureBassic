import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'

})

export class EmployeeService {

  employees: AngularFireList<Employee>;
  constructor(public af: AngularFireDatabase) {
    this.employees = this.af.list('/employees/Employees');
  }

  getEmployees(): Observable<Employee[]> {
    return this.employees.valueChanges();
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}

