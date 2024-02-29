/* The AuthService class in TypeScript provides authentication functionality by verifying user
credentials. */
import { Injectable, NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// import { User } from '../componenti/models/user.model';
import { Router } from '@angular/router';
import { inject } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user!: User;
  // login: any;

  router = inject(Router);

  constructor() { }

  // createUser(email: string, password: string){
  //   this.user = new User(email, password);
  // }

  private static authenticated: boolean = false;

  static initializeApp() {
    // Inizializza il valore di autenticazione in base alle tue esigenze
    // Ad esempio, controllando se l'utente ha effettuato l'accesso al sistema
    AuthService.authenticated = true;
  }

  static isAuthenticated(): boolean {
    return AuthService.authenticated;
  }

  authenticate(email: string, password: string): Observable<boolean> {
    // Inserire qui il codice per verificare le credenziali
    // Se le credenziali sono corrette, ritornare true
    // Altrimenti ritornare false

    // Per semplicità, verificheremo se l'email e la password corrispondono a quelle di un utente di esempio
    // In un'applicazione reale, è consigliabile utilizzare un servizio di backend per verificare le credenziali

    const user = {
      email: 'user@example.com',
      password: 'password'
    };

    if (email === email && password === password) {
      return of(true);
    } else {
      return of(false);
    }
  }

  navigateToDashboard() {
    // Navigate to the dashboard
    // In a real application, use the Angular Router to navigate
    console.log('Navigating to dashboard...');
    this.router.navigate(['/dashboard']);
  }

}
