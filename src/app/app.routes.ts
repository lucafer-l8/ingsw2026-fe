import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GameListComponent } from './component/games/game-list.component';
import { GameFormComponent } from './component/games/game-form.component';
import { ArticleListComponent } from './component/news/article-list.component';
import { ArticleFormComponent } from './component/news/article-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GameListComponent },
  { path: 'games/new', component: GameFormComponent },
  { path: 'games/edit/:barcode', component: GameFormComponent },
  { path: 'news', component: ArticleListComponent },
  { path: 'news/new', component: ArticleFormComponent },
  { path: 'news/edit/:id', component: ArticleFormComponent }
];
