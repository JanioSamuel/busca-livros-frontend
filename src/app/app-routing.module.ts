import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListaLivrosComponent
  },
  
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
