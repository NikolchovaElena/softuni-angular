import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SelectedMovieComponent } from 'src/app/selected-movie/selected-movie.component';
import { MoviesService } from '../movies.service';
import { Movie } from 'src/app/models/movie';


@Injectable()
export class SingleMovieResolver implements Resolve<Movie>{

    constructor(private movieService: MoviesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];

        return this.movieService.getMovie(id);
    }
}