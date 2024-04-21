import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { StoreComponent } from './Pages/store/store.component';

const routes: Routes = [
  { path: '' , component: LandingPageComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'store' , component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
