import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private movieService: MovieService) {

  }

  getMovies(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    console.log(searchTerm);
    this.movieService.getMovies(searchTerm).subscribe( movies => {
      console.log(movies);
      this.movies = movies !== undefined ? movies : [];
    })
  }

}
