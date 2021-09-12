import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  entryComponents: [DetallesComponent],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    DetallesComponent,
  ],
  exports: [
    SlideshowBackdropComponent,
    DetallesComponent,
    SlideshowPosterComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
