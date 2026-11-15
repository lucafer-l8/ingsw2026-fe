import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user.model';
import { SessionService } from '../../service/session.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loggedUser: User | null = null;

  constructor(private session: SessionService) {}

  ngOnInit(): void {
    this.loggedUser = this.session.getLoggedUser();
  }

}
