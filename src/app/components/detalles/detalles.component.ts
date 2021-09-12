import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  Cast,
  DetallePelicula,
  RespuestaCredits,
} from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  @Input() id;
  pelicula: DetallePelicula;
  hidden: number;
  actors: Cast[];
  options: any;

  constructor(
    private movieService: MoviesService,
    private modalController: ModalController
  ) {
    this.pelicula = {};
    this.hidden = 150;
    this.actors = [];
    // Options for the ion-slide
    this.options = {
      slidesPerview: 3.3,
      freeMode: true,
      spaceBetween: -5,
    };
  }

  ngOnInit() {
    this.getDetails();
    this.getActors();
  }

  /**
   * Returns the details of the movie
   */
  getDetails() {
    this.movieService.getMovieDetails(this.id).subscribe((response) => {
      this.pelicula = response;
    });
  }
  /**
   * Returns all the actors in the movie
   */
  getActors() {
    this.movieService
      .getActors(this.id)
      .subscribe((response: RespuestaCredits) => {
        console.log(response.cast);
        this.actors = response.cast;
      });
  }

  return() {
    this.modalController.dismiss();
  }
}
