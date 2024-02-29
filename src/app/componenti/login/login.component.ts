import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent {

  constructor(private authService: AuthService){}

  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
     const email = this.applyForm.value.email ?? ''
     const password = this.applyForm.value.password ?? ''
     console.log(email, password);

         // Call authService to authenticate
    this.authService.authenticate(email, password).subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        // Navigate to dashboard if authenticated
        this.authService.navigateToDashboard();
      } else {
        console.log('Invalid email or password');
      }
    });
  

    //chiamare authservice
    // this.authService.login(email, password).subscribe((data: any) => {
    //   console.log(data)
    //   this.authService.createUser(data.email, data.password)
    //   localStorage.setItem('user', JSON.stringify(this.authService.user))
      
    // })
    
  }

}
