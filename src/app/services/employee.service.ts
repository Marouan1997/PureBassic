import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList , AngularFireObject} from 'angularfire2/database';
import { Observable }from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
 
})

export class EmployeeService {
  
employees : AngularFireList <any[]>;
Employee: AngularFireObject <any>;
  constructor(public af: AngularFireDatabase) {
    this.employees = this.af.list('/employees/Employees') as AngularFireList<Employee[]>
   }

   getEmployees():  Observable<any>
   {

    return this.employees.valueChanges();
   }

   addEmployee( employee : Employee )
   {
     
   this.employees.push(employee);
    
   }
}

