import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNGModules } from '../core/modules/primeng.module';
import { ModalContatoComponent } from './modais/modal-contato/modal-contato.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalContatoComponent
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNGModules
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    ModalContatoComponent,
    PrimeNGModules

  ],
})
export class ComponentsModule { }
