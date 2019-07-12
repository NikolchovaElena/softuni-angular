//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';

//services
import { MoviesService } from './services/movies.service';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { AppRoutingModule } from './app.routing.module';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    SelectedMovieComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MoviesService,
    SingleMovieResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
