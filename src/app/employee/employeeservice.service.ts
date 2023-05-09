import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employeeinterface } from './employeeinterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private httpClient:HttpClient) {}

  getAll(){
     return this.httpClient.get<Employeeinterface[]>('http://localhost:3000/employee');
    }
 createEmployee(data: any) {
  return this.httpClient.post("http://localhost:3000/employee" , data);
}
getEmployee(){
  return this.httpClient.get("http://localhost:3000/employee" );
}
delete(id:number){
  return this.httpClient.delete<Employeeinterface>(`http://localhost:3000/employee/${id}`);
}
}

