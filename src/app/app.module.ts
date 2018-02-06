import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { AuthService } from './service/auth.service';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmailComponent } from './auth/email/email.component';
import { MembersComponent } from './auth/members/members.component';
import { CreateComponent } from './user/create/create.component';
import { GeneratecodeComponent } from './user/generatecode/generatecode.component';
import { CheckinComponent } from './user/checkin/checkin.component';
import { ListComponent } from './user/list/list.component';
import { AttendantsComponent } from './event/attendants/attendants.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,
    CreateComponent,
    GeneratecodeComponent,
    CheckinComponent,
    ListComponent,
    AttendantsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    routes
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]

})



export class AppModule { }
