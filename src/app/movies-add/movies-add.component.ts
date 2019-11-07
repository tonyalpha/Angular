import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';

@Component({
  selector: 'media-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    // let title = this.route.snapshot.paramMap.get("title");
    // this.movieService.addMovie(title);
  }
  search() {
    this.movieService.lookupMoviesByTitle("Star Wars").subscribe();
  }
}
