import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private usersUrl = 'http://localhost:3000/api/users';
  private articlesUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient, private session: SessionService) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticlesByAuthorCardNo(): Observable<Article[]> {
    const loggedUser = this.session.getLoggedUser();
    if (loggedUser) {
      const userCardNo = loggedUser.cardNo;
      return this.http.get<Article[]>(`${this.usersUrl}/${userCardNo}/contacts`);
    } else {
      throw new Error('Utente non autenticato');
    }
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.articlesUrl}/${id}`);
  }

  addArticle(article: Omit<Article, 'id'>): Observable<Article> {
    const loggedUser = this.session.getLoggedUser();
    if (loggedUser) {
      return this.http.post<Article>(this.articlesUrl, {
        ...article,
        authorCardNo: loggedUser.cardNo
      });
    } else {
      throw new Error('Utente non autenticato')
    }
  }

  updateArticle(id: number, article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.articlesUrl}/${id}`, {
      ...article
    });
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.articlesUrl}/${id}`);
  }

}
