import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MoviesListComponent,
    PageNotFoundComponent,
    MoviesDetailComponent,
    MoviesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
