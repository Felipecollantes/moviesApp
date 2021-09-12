import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../components/detalles/detalles.component';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  textoBuscar: string;
  ideas: string[];
  movies: any[];
  searching: boolean;

  constructor(
    private movieService: MoviesService,
    private modal: ModalController
  ) {
    this.textoBuscar = '';
    this.ideas = [
      'Spiderman',
      'Avenger',
      'El señor de los anillos',
      'El Padrino',
    ];
    this.movies = [];
    this.searching = false;
  }

  buscar(event) {
    const valor = event.detail.value;
    if (valor.length === 0) {
      this.searching = false;
      return;
    }

    this.searching = true;
    this.movieService.searchMovies(valor).subscribe((response) => {
      this.movies = response['results'];
      this.searching = false;
    });
  }

  async detail(id: number) {
    const modal = await this.modal.create({
      component: DetallesComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
