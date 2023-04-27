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

  getMovies(searchTerm: string) {
    this.movieService.getMovies(searchTerm).subscribe(data => {
      console.log(data);
      this.movies = data.Search;
    })
  }

}
