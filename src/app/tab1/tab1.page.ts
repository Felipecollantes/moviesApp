import { Component, OnInit } from '@angular/core';
import { Pelicula, RespuestaMovie } from '../interfaces/interfaces';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculaRecientes: Pelicula[];
  slideOpts: any;
  constructor(private movieService: MoviesService) {
    this.peliculaRecientes = [];
    this.slideOpts = {
      slidesPerview: 1.2,
      freeMode: true
    };
  }

  ngOnInit(){
    this.movieService.getFeature().subscribe((resp: RespuestaMovie) => {
      console.log('respuesta',resp);
      this.peliculaRecientes = resp.results;
    });
  }

}
