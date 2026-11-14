import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Game } from '../../model/game.model';
import { GameService } from '../../service/game.service'

@Component({
  standalone: true,
  selector: 'app-game-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  letter: string = '';
  genre: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(
      games => { this.games = games; }
    );
  }

  letters(): string[] {
    return [...new Set(this.games.map(
      game => game.title[0].toUpperCase()
    ))].sort();
  }

  genres(): string[] {
    return [...new Set(this.games.map(
      game => game.genre
    ))].sort();
  }

  selectLetter(event: Event, letter: string) {
    event.preventDefault();
    this.letter = letter;
  }

  selectGenre(event: Event, genre: string) {
    event.preventDefault();
    this.genre = genre;
  }

  filterByLetter(games: Game[], letter: string): Game[] {
    return games.filter(
      game => game.title.toUpperCase().startsWith(letter)
    )
  }

  filterByGenre(games: Game[], genre: string): Game[] {
    return games.filter(
      game => game.genre === genre
    )
  }

  filter(games: Game[], letter: string, genre: string): Game[] {
    let filteredGames: Game[] = games;
    if (letter !== '')
      filteredGames = this.filterByLetter(games, letter);
    if (genre !== '')
      filteredGames = this.filterByGenre(games, genre);
    return filteredGames;
  }

  delete(barcode: string) {
    this.gameService.deleteGame(barcode).subscribe(
      () => { this.games = this.games.filter(
        game => game.barcode !== barcode
      ); }
    );
  }

}
