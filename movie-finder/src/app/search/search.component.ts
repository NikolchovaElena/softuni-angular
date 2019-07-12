import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Movie[];

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.query = params['search'];

      this.movieService.findAMovie(this.query).subscribe(data => {
        this.results = data;
      })
    })
  }
}
