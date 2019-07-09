import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

const apiKey = 'a883674307d5252880368318ad645440';

@Injectable()
export class MoviesService {

  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  inTheaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  authentication: string = '&api_key=';
  kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  dramas: string = 'discover/movie?with_genres=18&primary_release_year=2014';
  movie: string = 'movie/';
  movieAuth: string = '?api_key=';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie> {
    return this.http.get<Movie>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }

  getInTheaters(): Observable<Movie> {
    return this.http.get<Movie>(`${this.path}${this.inTheaters}${this.authentication}${apiKey}`);
  }

  getKids(): Observable<Movie> {
    return this.http.get<Movie>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
  }

  GetDramas(): Observable<Movie> {
    return this.http.get<Movie>(`${this.path}${this.dramas}${this.authentication}${apiKey}`);
  }

  getMovie(id): Observable<Movie>  {
    return this.http.get<Movie>(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`);
  }
}
