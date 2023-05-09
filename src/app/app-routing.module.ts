import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';
import { CreateComponent } from './employee/create/create.component';

const routes: Routes = [
  {path:'',redirectTo:'employee/home', pathMatch:'full'},
  {path:'employee/home',component:HomeComponent},
  {path:'employee',redirectTo:'employee/home', pathMatch:'full'},  
  {path:'employee/create',component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
