import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {
  msg = "";

  constructor(private http : HttpClient, public router : Router) {}

  
  confirmationValidator = (control: FormControl): 
  { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.resetForm.controls['newPassword'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  

  resetForm = new FormGroup({
    newPassword: new FormControl ('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    confirmNewpassword: new FormControl ('', [Validators.required, this.confirmationValidator])
  })

  ngOnInit(): void {
  }

  resetPassword(){

    this.http.post<any>("http://localhost:7021/api/v1/user/forgetPasswordReset", this.resetForm.value)
   .subscribe(res => {
    alert("Password changed successfully!");
    this.resetForm.reset();
    this.router.navigate(['/shared/login']);
   },err => {
    alert("Something went wrong")
   })
  }
}
