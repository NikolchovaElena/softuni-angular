import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from "@angular/core";

import { MoviesComponent } from './movies/movies.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'movie' },
    { path: 'movie', component: MoviesComponent },
    { path: 'movie/search', component: SearchComponent },
    { path: 'movie/:id', component: SelectedMovieComponent, resolve: SingleMovieResolver }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }