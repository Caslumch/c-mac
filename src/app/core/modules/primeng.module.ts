
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
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

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
    TooltipModule,
    MenuModule,
    RatingModule,
    ProgressSpinnerModule,
    ProgressBarModule,
ToastModule
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
    TooltipModule,
    MenuModule,
    RatingModule,
    ProgressSpinnerModule,
    ProgressBarModule,
ToastModule

  ],
  providers: [],
})
export class PrimeNGModules { }
