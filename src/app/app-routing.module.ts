import { CardListModule } from './pages/cards/list/card-list.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  redirectTo: 'decks/list', pathMatch: 'full' },
  {
    path: 'decks',  loadChildren: () =>
      import('./pages/cards/list/card-list.module').then(e => e.CardListModule)
  },
  { path:'deck', loadChildren: () => 
      import('./pages/cards/detail/card-detail.module').then(e => e.CardDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
