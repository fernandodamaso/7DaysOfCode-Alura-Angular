import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavesComponent } from './naves/naves.component';
import { FilmesComponent } from './filmes/filmes.component';

const routes: Routes = [
  {
    path: '',
    // Este atributo tira os espaços do nome
    pathMatch: 'full',
    // redireciona para a rota home
    redirectTo: 'home',
  },
  { path: 'home', component: HomeComponent },
  { path: 'naves', component: NavesComponent },
  { path: 'filmes', component: FilmesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
