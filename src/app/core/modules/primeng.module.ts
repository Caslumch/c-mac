
import { NgModule } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [],
  imports: [
    DropdownModule,
    ButtonModule,
    PanelModule,
    DividerModule,
    InputTextModule,
  ],
  exports: [
    DropdownModule,
    ButtonModule,
    PanelModule,
    DividerModule,
    InputTextModule,

  ],
  providers: [],
})
export class PrimeNGModules { }
