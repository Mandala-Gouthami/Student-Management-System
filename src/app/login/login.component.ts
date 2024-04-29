import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { SignupService } from '../services/signup.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User=new User();

  constructor(private signupService: SignupService, private router: Router){}

  userLogin(){
    console.log(this.user);
    this.signupService.loginUser(this.user).subscribe(data=>{
      alert("login successful");
      this.router.navigate(['/dashboard']);
    },
    error=>alert("sorry please enter correct email and password"));
  }

}
