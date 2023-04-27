import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Input('movie') movie: any;


  getImagen(){
    if(this.movie.Poster === 'N/A'){
      return 'http://via.placeholder.com/600';
    }else{
      return this.movie.Poster;
    }
  }


}
