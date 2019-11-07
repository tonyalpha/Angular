import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'media-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  constructor(private moviesService: MoviesService) {}

  getMovies(): void {
    this.moviesService.getMovies().subscribe(m=>this.movies=m);
  }
  
  ngOnInit() {
    this.getMovies();
  }

}
