import { Routes } from '@angular/router';
import { GameListComponent } from './component/games/game-list.component';
import { ArticleListComponent } from './component/news/article-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games', component: GameListComponent },
  { path: 'news', component: ArticleListComponent }
];
