import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    AuthService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  email: string = ''
  name: string = ''
  password: string = ''

  onSubmit() {
    this.authService.register(this.email, this.name, this.password).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login'])
    }, error => {
      console.error(error);
    });
  }

  onBack() {
    this.router.navigate(['/login'])
  }

}
