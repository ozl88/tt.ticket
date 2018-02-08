import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MembersComponent } from './auth/members/members.component';
import { AuthService } from './service/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { EmailComponent } from './auth/email/email.component';
import { CreateComponent } from './user/create/create.component';
import { GeneratecodeComponent } from './user/generatecode/generatecode.component';
import { CheckinComponent } from './user/checkin/checkin.component';
import { ListComponent } from './user/list/list.component';
import { AttendantsComponent } from './event/attendants/attendants.component';
import { ClaimComponent } from './claim/claim.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'claim', component: ClaimComponent },      
    { path: 'members', component: MembersComponent, canActivate: [AuthService] },    
    { path: 'create', component: CreateComponent, canActivate: [AuthService] },  
    { path: 'generatecode', component: GeneratecodeComponent, canActivate: [AuthService] },    
    { path: 'checkin', component: CheckinComponent, canActivate: [AuthService] },
    { path: 'userlist', component: ListComponent, canActivate: [AuthService] },
    { path: 'attendants', component: AttendantsComponent, canActivate: [AuthService] }

    

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);