import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  username: string = ''
  password: string = ''


  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(response => {
      console.log(response);
      this.authService.setUserData(response)
      this.router.navigate(['/home'])
    }, error => {
      console.error(error);
    });
  }

  onRegister() {
    this.router.navigate(['/register'])
  }
}
