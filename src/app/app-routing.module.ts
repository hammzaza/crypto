import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
        {
            path: '',
            loadChildren: './layout/layout.module#LayoutModule'
        }],
    
},
  { path: '', component: LoginComponent },
  { path:'sign-up', component: SignupComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
