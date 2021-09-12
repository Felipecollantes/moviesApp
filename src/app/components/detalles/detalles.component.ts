import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  Cast,
  DetallePelicula,
  RespuestaCredits,
} from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { Thumbs } from 'swiper';

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
    this.options = {
      slidesPerview: 3.3,
      freeMode: true,
      spaceBetween: -5,
    };
  }

  ngOnInit() {
    this.movieService.getMovieDetails(this.id).subscribe((response) => {
      console.log(response);
      this.pelicula = response;
    });

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
