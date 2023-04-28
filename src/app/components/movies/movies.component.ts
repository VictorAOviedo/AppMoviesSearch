import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, tap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
    return searchTerm
  }),
  tap((searchTerm: string) => console.log(searchTerm))
    ).subscribe((searchTerm: string) => {
      this.getMovies(searchTerm)
    })
  }

getMovies(searchTerm: string) {
  this.movieService.getMovies(searchTerm).subscribe(movies => {
    console.log(movies);
    this.movies = movies !== undefined ? movies : [];
  })
}

}
