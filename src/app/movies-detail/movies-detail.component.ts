import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';

@Component({
  selector: 'media-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    let id =+ this.route.snapshot.paramMap.get('id');
    this.setMovie(id);
  }

  setMovie(paramId: number) {
    this.movieService.getMovie(paramId).subscribe((movie)=>{
      this.movie = movie;
      console.log('id='+movie.id);
    });
  }

}
