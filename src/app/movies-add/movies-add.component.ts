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
  movies: Movie[];

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    // let title = this.route.snapshot.paramMap.get("title");
    // this.movieService.addMovie(title);
  }
  search(title: string) {
    this.movieService.lookupMoviesByTitle(title).subscribe(m => this.movies = m);
  }
}
