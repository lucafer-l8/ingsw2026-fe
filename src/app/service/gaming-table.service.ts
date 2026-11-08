import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamingTable } from '../model/gaming-table.model';

@Injectable({ providedIn: 'root' })
export class GamingTableService {

  private apiUrl = 'http://localhost:3000/api/gaming-tables';

  constructor(private http: HttpClient) {}
  
  getAll(): Observable<GamingTable[]> {
    return this.http.get<GamingTable[]>(this.apiUrl);
  }

  getById(id: string): Observable<GamingTable> {
    return this.http.get<GamingTable>(`${this.apiUrl}/${id}`);
  }

  create(entity: GamingTable): Observable<GamingTable> {
    return this.http.post<GamingTable>(this.apiUrl, entity);
  }

  update(id: string, entity: GamingTable): Observable<GamingTable> {
    return this.http.put<GamingTable>(`${this.apiUrl}/${id}`, entity);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
