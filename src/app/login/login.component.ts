import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
 
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    });
    // Vous pouvez retirer l'appel à handleLogin() ici
  }
  
  handleLogin() {
    // Récupérer les données du formulaire
    const formData = this.loginForm.value;
    const username = formData.username;
    const password = formData.password;
  
    // Vérifier que les champs ne sont pas vides
    if (username && password) {
      this.authService.login(username, password).subscribe({
        next: data => {
          this.authService.loadProfile(data);  // Charger le profil utilisateur
          this.router.navigateByUrl("/navbar/dashboard");  // Rediriger vers le tableau de bord
        },
        error: err => {
          console.error("Erreur de connexion", err);  // Gérer l'erreur de connexion
        }
      });
    } else {
      console.error("Le formulaire est incomplet.");
    }
  }
}  