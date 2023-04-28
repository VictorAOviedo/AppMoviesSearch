import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Input('movie') movie!: Movie;


  getImagen(){
    if(this.movie.Poster === 'N/A'){
      return 'https://1.bp.blogspot.com/-fYZYXD9d3mA/VNMDxHATK-I/AAAAAAAAJeM/vUFl2Tw5nLE/s1600/word-llenar.jpg';
      /*return 'http://via.placeholder.com/600';*/
    }else{
      return this.movie.Poster;
    }
  }


}
