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

  results: Movie[];

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const query = this.route.snapshot.queryParams['search'];
   
    this.movieService.findAMovie(query).subscribe(data => {
      this.results = data;
    })
  }
}
