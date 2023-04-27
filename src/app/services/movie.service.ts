import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_URL: string = 'http://www.omdbapi.com/?apikey=d184967a';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<any>{
    return this.http.get(this.API_URL + '&s=' + searchTerm);
  }



}
