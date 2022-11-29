import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from './companies/companies/companies.component';
import { CompanyComponent } from './companies/company/company.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { LoginInterceptorProvider } from './security/login.interceptor';
import { LoginGuard } from './security/login.guard';
import { LogoutGuard } from './security/logout.guard';
import { Error404Component } from './error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompaniesComponent,
    CompanyComponent,
    NavbarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatDialogModule,
  ],
  providers: [LoginInterceptorProvider,
              LoginGuard,
              LogoutGuard,
              { provide: MAT_DIALOG_DATA, useValue: {} },
              { provide: MatDialogRef, useValue: {} },
            ],

  bootstrap: [AppComponent],
})
export class AppModule {}
