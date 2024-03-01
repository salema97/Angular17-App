import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'salema97';
  isLoggedIn = false; // <- esta funcionando como un state
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName
  }

  greet() {
    alert('Holaaaaa!!');
  }
}
