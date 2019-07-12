import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-component',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  selectedMovie: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //  this.id = this.route.snapshot.params['id'];
    this.selectedMovie = this.route.snapshot.data['singleMovie'];

  }
}
