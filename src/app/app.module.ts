import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.modules';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { PixComponent } from './pages/modulos/pix/pix.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const options: Partial<IConfig> = {};

@NgModule({
  declarations: [
    AppComponent,
    PixComponent,
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ComponentsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ButtonModule,
    ToastModule,
    ProgressSpinnerModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
