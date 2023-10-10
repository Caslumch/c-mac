
import { NgModule } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
  declarations: [],
  imports: [
    DropdownModule,
    ButtonModule,
    PanelModule,
    DividerModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    OverlayPanelModule
  ],
  exports: [
    DropdownModule,
    ButtonModule,
    PanelModule,
    DividerModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    OverlayPanelModule

  ],
  providers: [],
})
export class PrimeNGModules { }
