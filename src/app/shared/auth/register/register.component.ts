import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();
  msg="";
  
  constructor(private http : HttpClient, private router: Router) {}

  confirmationValidator = (control: FormControl): 
  { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  
  registerForm = new FormGroup({
      
      firstName: new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      username: new FormControl ('', Validators.required),
      email: new FormControl ('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl ('', [
        Validators.required, 
        Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
       ]),
      password: new FormControl ('', [
        Validators.required, 
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
        ]),
      confirmPassword: new FormControl ('', [Validators.required, this.confirmationValidator]),
      
   })

   registerUser(){
    
    this.http.post<any>("http://localhost:7021/api/v1/user/registerNewUser", this.registerForm.value)
   .subscribe(res => {
    alert("Account created successfully. Please check your email to activate your account!");
    this.registerForm.reset();
    this.router.navigate(['/shared/login']);
   },err => {
    alert("Details already exist in our system!")
   })
    
    
    
    // this.service.registerUserFromRemote(this.user).subscribe(
    //   data =>{
    //     this.router.navigate(["/shared/login"]) 
    //     console.log("Response received");
    //     this.msg="You have successfully created an account";
    //   },
    //   error => {
    //     console.log("Exception occurred");
    //     this.msg = error.error;
    //      }
    //    )
      }
    }

  
