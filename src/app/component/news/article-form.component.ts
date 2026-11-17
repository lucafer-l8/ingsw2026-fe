import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Article } from "../../model/article.model";
import { ArticleService } from "../../service/article.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent implements OnInit {

  article: Partial<Article> = {};
  edit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    /* If the 'id' parameter is specified in the route,
    then the form is being used to edit an existing article
    rather than publish a new one */
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.edit = true;
      this.articleService.getArticleById(+id).subscribe(
        article => { this.article = article; }
      );
    }
  }

  save() {
    const payload = this.article as Article;
    if (this.edit && payload.authorCardNo != null) {
      this.articleService.updateArticle(payload.authorCardNo, payload).subscribe(
        () => { this.router.navigate(['/news']); }
      );
    } else {
      this.articleService.addArticle(payload).subscribe(
        () => { this.router.navigate(['/news']); }
      );
    }
  }

  cancel() {
    this.router.navigate(['/news']);
  }

}
