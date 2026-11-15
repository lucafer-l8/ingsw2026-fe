import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from './model/user.model';
import { UserService } from './service/user.service';
import { SessionService } from './service/session.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  username = '';
  password = '';
  error = '';
  loggedUser: User | null = null;

  constructor(private session: SessionService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loggedUser = this.session.getLoggedUser();
  }

  login() {
    this.error = '';
    this.userService.getUserByUsername(this.username).subscribe({
      next: (users: User[]) => {
        let user: User = users[0];
        if (user && user.password === this.password) {
          this.session.setLoggedUser(user);
          this.loggedUser = this.session.getLoggedUser();
          this.router.navigate(['/games']);
        } else {
          this.error = 'Password errata';
        }
      },
      error: () => {
        this.error = 'Utente non trovato';
      }
    });
  }

  logout() {
    this.session.clearLoggedUser();
    this.loggedUser = this.session.getLoggedUser();
    this.router.navigate(['/home']);
  }

}
