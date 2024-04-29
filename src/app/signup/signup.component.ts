import { SignupService } from './../services/signup.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  formData:User=new User();

  constructor(private router: Router, private signUpService: SignupService){}

  saveUser(){
    this.signUpService.addUser(this.formData).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/login']);
    },
    error=>console.log(error)
    );
  }
  onSubmit(){
    console.log(this.formData);
    this.saveUser();
  }

}
