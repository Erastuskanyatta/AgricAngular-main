import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { ConfirmfailComponent } from './confirmfail/confirmfail.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'resetpass',
    component: ResetpassComponent
  },
  {
    path: 'forgotpass',
    component: ForgotpassComponent
  },
  {
    path: 'confirmed',
    component: ConfirmedComponent
  },
  {
    path: 'confirmfail',
    component: ConfirmfailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
