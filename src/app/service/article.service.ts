import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';

@Injectable({providedIn: 'root'})
export class ArticleService {

  private articlesUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.articlesUrl}/articles`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.articlesUrl}/${id}`);
  }

  //addArticle() {}

  //updateArticle() {}

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.articlesUrl}/${id}`);
  }

}
