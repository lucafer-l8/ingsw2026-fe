import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../model/article.model';
import { ArticleService } from '../../service/article.service';

@Component({
  standalone: true,
  selector: 'app-article-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      articles => { this.articles = articles; }
    );
  }

  //...filters...

  filter(articles: Article[]): Article[] {
    let filteredArticles: Article[] = [...articles];
    //...filters applied here...
    return filteredArticles;
  }

}
