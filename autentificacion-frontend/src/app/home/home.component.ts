import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  userData: any
  email: string = ''
  name: string = ''

  ngOnInit(): void {
    this.authService.getUserData().subscribe(data => {
      if ( data ) {
        this.userData = data;
        console.log('data', this.userData);
      }
    });
  }

}
