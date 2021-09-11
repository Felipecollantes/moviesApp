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

  cargarMas() {
    this.getPeliculas();
  }

  getPeliculas() {
    this.movieService.getFeature().subscribe((resp: RespuestaMovie) => {
      this.peliculaRecientes.push(...resp.results);
      console.log(this.peliculaRecientes);
    });
  }
}
