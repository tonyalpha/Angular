import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'media-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get("title");
    this.movieService.addMovie(title);
  }

}
