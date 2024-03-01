import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
    <ul>
      <h3>Los juegos favoritos de {{username}}</h3>
      @for (game of games; track game.id){
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GameComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: "Warzone",

    },
    {
      id: 2,
      name: "Asassins's Creed"
    },
    {
      id: 3,
      name: "God of War"
    }
  ]

}
