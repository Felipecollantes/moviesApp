import { Component, OnInit } from '@angular/core';
import { Pelicula, RespuestaMovie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  peliculaRecientes: Pelicula[];
  constructor(private movieService: MoviesService) {
    this.peliculaRecientes = [];
  }

  ngOnInit() {
    this.getPeliculas();
  }

  /**
   * Return more movies
   */
  cargarMas() {
    this.getPeliculas();
  }

  /**
   * Request to receive the movies
   */
  getPeliculas() {
    this.movieService.getData().subscribe((resp: RespuestaMovie) => {
      this.peliculaRecientes.push(...resp.results);
    });
  }
}
