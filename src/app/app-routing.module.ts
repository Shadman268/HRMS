import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './Modules/LMS/Mainpage/calendar/calendar.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
