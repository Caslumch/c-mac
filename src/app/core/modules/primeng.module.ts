
import { NgModule } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';


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
    OverlayPanelModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    DropdownModule,
    ButtonModule,
    PanelModule,
    DividerModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    OverlayPanelModule,
    TableModule,
    TooltipModule

  ],
  providers: [],
})
export class PrimeNGModules { }
