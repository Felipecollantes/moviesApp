import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[];
  @Output() cargarMas = new EventEmitter();
  slideOpts: any;

  constructor(private modal: ModalController) {
    this.peliculas = [];
    this.slideOpts = {
      slidesPerview: 3.3,
      freeMode: true,
    };
  }

  ngOnInit() {}

  onClick() {
    this.cargarMas.emit();
  }

  async detalle(id: number) {
    const modal = await this.modal.create({
      component: DetallesComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
