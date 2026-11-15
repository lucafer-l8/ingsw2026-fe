import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../model/game.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private usersUrl = 'http://localhost:3000/api/users';
  private gamesUrl = 'http://localhost:3000/api/games';

  constructor(private http: HttpClient, private session: SessionService) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameByBarcode(barcode: string): Observable<Game> {
    return this.http.get<Game>(`${this.gamesUrl}/${barcode}`);
  }

  addGame(game: Game): Observable<Game> {
    const loggedUser = this.session.getLoggedUser();
    if (loggedUser) {
      return this.http.post<Game>(this.gamesUrl, {
        ...game
      });
    } else {
      throw new Error('Utente non autenticato')
    }
  }

  updateGame(barcode: string, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.gamesUrl}/${barcode}`, {
      ...game
    });
  }

  deleteGame(barcode: string): Observable<void> {
    return this.http.delete<void>(`${this.gamesUrl}/${barcode}`);
  }

}
