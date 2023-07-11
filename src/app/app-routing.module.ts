import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipComponent } from './starships/starship.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: '',
    // Este atributo tira os espaços do nome
    pathMatch: 'full',
    // redireciona para a rota home
    redirectTo: 'home',
  },
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarshipComponent },
  { path: 'films', component: FilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
