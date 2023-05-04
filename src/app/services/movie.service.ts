import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_URL: string = '//www.omdbapi.com/?apikey=d184967a';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<ApiResponse>(this.API_URL + '&s=' + searchTerm).pipe(
      map(response => {
        return response.Search;
      })
    );
  }
}
