import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddeventComponent } from './addevent/addevent.component';
import { EditeventComponent } from './editevent/editevent.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent  },
  { path: 'signup', component:SignupComponent },
  { path: 'addevent', component:AddeventComponent },
  { path: 'appointment', component:AppointmentComponent  },
  { path: 'editevent', component: EditeventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
