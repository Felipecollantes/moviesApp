import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas: Pelicula[];
  slideOpts: any;

  constructor(private modal: ModalController) {
    this.peliculas = [];
    this.slideOpts = {
      slidesPerview: 3.2,
      freeMode: true,
    };
  }

  ngOnInit() {}

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
