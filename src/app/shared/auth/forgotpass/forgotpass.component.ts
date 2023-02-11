import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {

  user = new User();
  msg = "";

 constructor(private http : HttpClient, private router: Router) {}
  

  forgotPassForm = new FormGroup({
    email: new FormControl ('', [Validators.email, Validators.required])
    })

forgotPassword(){

  this.http.post<any>(" http://localhost:7021/api/v1/user/forgetPasswordLink", this.forgotPassForm.value)
  .subscribe(res => {
   alert("Check your email for a reset link");
   this.forgotPassForm.reset();
   
   this.router.navigate(['/shared/resetpass']);
  },err => {
   alert("An error occurred. Try again later")
   console.log(err)
  })
  
   
}

// get username(){
//   return this.loginForm.get('email') 
// }

}


