import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: 'pokemon-list',
    pathMatch: 'full',
    component: PokemonListComponent
  },
  {
    path: 'pokemon-detail/:id',
    pathMatch: 'full',
    component: PokemonDetailComponent
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'pokemon-list'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
