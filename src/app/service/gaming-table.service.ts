import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamingTable } from '../model/gaming-table.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class GamingTableService {

  private usersUrl = 'http://localhost:3000/api/users';
  private gamingTablesUrl = 'http://localhost:3000/api/gaming-tables';

  constructor(private http: HttpClient, private session: SessionService) {}

  getGamingTables(): Observable<GamingTable[]> {
    return this.http.get<GamingTable[]>(this.gamingTablesUrl);
  }

  getGamingTableByInvCode(invCode: number): Observable<GamingTable> {
    return this.http.get<GamingTable>(`${this.gamingTablesUrl}/${invCode}`);
  }

  addGamingTable(gamingTable: GamingTable): Observable<GamingTable> {
    const loggedUser = this.session.getLoggedUser();
    if (loggedUser) {
      return this.http.post<GamingTable>(this.gamingTablesUrl, {
        ...gamingTable
      });
    } else {
      throw new Error('Utente non autenticato')
    }
  }

  updateGamingTable(invCode: string, gamingTable: GamingTable): Observable<GamingTable> {
    return this.http.put<GamingTable>(`${this.gamingTablesUrl}/${invCode}`, {
      ...gamingTable
    });
  }

  deleteGamingTable(invCode: string): Observable<void> {
    return this.http.delete<void>(`${this.gamingTablesUrl}/${invCode}`);
  }

}
