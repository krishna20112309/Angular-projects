import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
      path:'',redirectTo:'signup',pathMatch:'full'
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'signup',component:SignupComponent
    },
    {
      path:'renewBuy_Partners',component:DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
