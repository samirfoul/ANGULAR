import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // crée un objet de type FormGroup
  loginForm!: FormGroup;

  // stocke la réponse du serveur
  message!: string;

  // permet d'afficher un message d'erreur à l'utilisateur
  invalidLogin: boolean = false;

  constructor(
    // injecte les services
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // initialise le formulaire
    // valide les champs
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }
  // connecte un utilisateur
  logIn(): void {
    // Empêche l'envoi si les données sont invalides
    if (this.loginForm.invalid) {
      return;
    }
    // console.log(this.loginForm.value);
    // Récupère les données saisies
    const loginData = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };

    // Passe en paramètre les données saisies à la méthode "logIn()" du loginService
    this.loginService.logIn(loginData).subscribe((response) => {
      // console.log(response);
      // console.log(response.token);
      this.message = response.message;
      if (response.token) {
        sessionStorage.setItem('token', response.token);
        const link = ['companies'];
        this.router.navigate(link);
      } else {
        this.invalidLogin = true;
      }
    });
  }
}
