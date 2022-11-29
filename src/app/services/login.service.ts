import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = environment.baseUrl2;
  // users:User[]=[];

  // popup add
  

  constructor(private httpClient: HttpClient, private router: Router) {}

  // connecte un utilisateur
  logIn(loginData: any): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/login.php`, loginData);
  }
  // déconnecte un utilisateur et le redirige vers l'accueil
  logOut(): void {
    sessionStorage.removeItem('token');
    const link = ['login'];
    this.router.navigate(link);
  }
}
