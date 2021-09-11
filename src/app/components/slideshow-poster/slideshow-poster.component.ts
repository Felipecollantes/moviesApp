import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[];
  slideOpts: any;

  constructor() {
    this.peliculas = [];
    // this.slideOpts = {
    //   slidesPerview: 3.3,
    //   freeMode: true,
    // };
    this.slideOpts = {
      slidesPerview: 3.3,
      freeMode: true,
    };
  }

  ngOnInit() {}
}
