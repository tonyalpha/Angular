import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


const appRoutes: Routes = [
  { path: "", component: MoviesListComponent},
  { path: 'movies', component: MoviesListComponent},
  { path: 'movies/add', component: MoviesAddComponent},
  { path: 'movies/:id', component: MoviesDetailComponent},
  { path: "**", component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
