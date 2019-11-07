import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiUrl;
  private movies: Movie[];

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiUrl);
  }

  getMovie(id: number) : Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}/${id}`);
    //this.movies.find(movie => movie.id === id);
  }

  addMovie(onlineId: string) {
    this.httpClient.post<Movie>(this.apiUrl, "");
  }
}
