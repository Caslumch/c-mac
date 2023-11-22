import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TraductionService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-modal-weather',
  templateUrl: './modal-weather.component.html',
})
export class ModalWeatherComponent implements OnInit {
  

  constructor(
    private traductionService: TraductionService,
    private translate: TranslateService,
  ) {

  }

  displayModal: boolean = false;
  simbolStyle: string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = ` | `;



  @Input() dadosWeather: any = [];
  @Input() src: any;
  link: any
  ehMobile: any
  ngOnInit(): void {
    this.languageUser()
    this.dadosWeather
    this.link = `https://openweathermap.org/img/wn/${this.src}.png`
    this.ehMobile = window.screen.width < 992;

  }


userLanguage: any
languageUser = () => {
  this.userLanguage = this.traductionService.getUserLanguage();
  this.translate.setDefaultLang(this.userLanguage);
  
}

getLabel(e: any): string {
  return this.translate.instant(e);
}

  openModal = () => (this.displayModal = true);

  closeModal = () => (this.displayModal = false);

}
