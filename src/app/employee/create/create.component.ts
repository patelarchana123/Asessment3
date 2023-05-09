import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { EmployeeModule } from '../employee.module';
import { Employeeinterface } from '../employeeinterface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  employeeForm = new FormGroup({
    firstname : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    lastname : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    department : new FormControl('',[Validators.required]),
    address : new FormControl('',Validators.required),
    contactnumber : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(150)]),
    password : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    confirmpassword : new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]),
   }) 
   getAll : any;
  constructor( private commonservice: EmployeeserviceService , private router:Router){}

   LoginUser(): void{
    this.commonservice.createEmployee(this.employeeForm.value).subscribe({
      next:(data) =>{
        this.router.navigate(['/employee/home'])
      },error:(err) =>{
        console.log(err);
      }
    })
   }
   get firstnameValidator(){
     return this.employeeForm.get('firstname')
   }
   get lastnameValidator(){
    return this.employeeForm .get('lastname')
  }
   get emailValidator(){
    return this.employeeForm .get('email')
  }
  get departmentValidator(){
    return this.employeeForm .get('deaprtment')
  }
  get addressValidator(){
    return this.employeeForm .get('address')
  }
  get contactnumberValidator(){
    return this.employeeForm .get('phonenumber')
  }
  get descriptionValidator(){
    return this.employeeForm .get('description')
  }
  get passwordValidator(){
    return this.employeeForm .get('password')
  }
 get confirmpasswordValidator(){
  return this.employeeForm.get('confirmpassword')
 }
 addEmployee(){
  console.log("It is working")
}
 
}
