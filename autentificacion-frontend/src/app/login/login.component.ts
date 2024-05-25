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
  providers: [AuthService],
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
      // Maneja la respuesta del backend aquí
      console.log(response);
    }, error => {
      // Maneja el error aquí
      console.error(error);
    });
    // this.router.navigate(['/home'])
  }

}
