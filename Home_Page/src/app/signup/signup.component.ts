import { Component, OnInit } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup} from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router,private subscribe:Subscription) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:[''],
      referral:['']

    })
    
  }
//make method to create user
signUp(){
  this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
    alert("User record Succesfully 0");
    this.signupForm.reset();
    this.router.navigate(['login'])
  },err=>{
    alert("Please enter the valid details");
  }
  )
}
}
