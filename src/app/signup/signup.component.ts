import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  formData={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:'',
    age:null,
    company: ''
  }

  constructor(private router: Router){}

  onSubmit(){
    console.log(this.formData);
    this.router.navigate(['/dashboard']);
  }
}
