import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
  }

  // retourne la méthode logOut() du service loginService
  logOut(): void {
    this.loginService.logOut();
} 
}

