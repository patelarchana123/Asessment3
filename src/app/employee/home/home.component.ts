import { Component,OnInit } from '@angular/core';
import { Employeeinterface } from '../employeeinterface';
import { EmployeeserviceService } from '../employeeservice.service';
import { EmployeeModule } from '../employee.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allEmployee : Employeeinterface[] = [];
 constructor( private employeeService : EmployeeserviceService){}

 ngOnInit(): void {
   this.employeeService.getAll().subscribe((data)=>{
     this.allEmployee = data;
   })
 }
 deleteItem(id:number){
  this.employeeService.delete(id).subscribe({
  next: (data) =>{
    this.allEmployee = this.allEmployee.filter(_ => _.id != id)
  }
  })
 }
}
