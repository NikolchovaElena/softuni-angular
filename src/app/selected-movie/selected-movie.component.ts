import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-component',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  id: string;
  selectedMovie: any;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
  //  this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      
    })

    this.moviesService.getMovie(this.id).subscribe(movie => {
      this.selectedMovie = movie;
    })
  }

}
