import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../model/game.model'

@Injectable({providedIn: 'root'})
export class GameService {

  private gamesUrl = 'http://localhost:3000/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.gamesUrl}/games`);
  }

  getGameByBarcode(barcode: string): Observable<Game> {
    return this.http.get<Game>(`${this.gamesUrl}/${barcode}`);
  }

  //addGame() {}

  //updateGame() {}

  deleteGame(barcode: string): Observable<void> {
    return this.http.delete<void>(`${this.gamesUrl}/${barcode}`)
  }

}
