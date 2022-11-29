import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies/companies.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './security/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'companies', component: CompaniesComponent, canActivate: [LoginGuard] },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
