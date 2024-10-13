import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { CalendarComponent } from './Modules/LMS/Mainpage/calendar/calendar.component';
import { ApplyleaveComponent } from './Modules/LMS/Mainpage/applyleave/applyleave.component';
import { LoginComponent } from './login/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ApplyleaveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
