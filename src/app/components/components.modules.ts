import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNGModules } from '../core/modules/primeng.module';
import { ModalContatoComponent } from './modais/modal-contato/modal-contato.component';
import { ModalWeatherComponent } from './modais/modal-weather/modal-weather.component';
import { ModalViewerComponent } from './modais/modal-viewer/modal-viewer.component';
import { TranslationModule } from '../core/modules/translation.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalContatoComponent,
    ModalWeatherComponent,
    ModalViewerComponent,
    LoadingComponent
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNGModules,
    TranslationModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    ModalContatoComponent,
    ModalWeatherComponent,
    LoadingComponent,
    ModalViewerComponent,
    PrimeNGModules

  ],
})
export class ComponentsModule { }
