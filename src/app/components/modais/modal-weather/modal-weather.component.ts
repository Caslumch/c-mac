import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-weather',
  templateUrl: './modal-weather.component.html',
})
export class ModalWeatherComponent implements OnInit {
  constructor() {

  }

  displayModal: boolean = false;
  simbolStyle: string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = ` | `;



  @Input() dadosWeather: any = [];
  @Input() src: any;
  link: any
  ehMobile: any
  ngOnInit(): void {
    this.dadosWeather
    this.link = `https://openweathermap.org/img/wn/${this.src}.png`
    this.ehMobile = window.screen.width < 992;

  }

  openModal = () => (this.displayModal = true);

  closeModal = () => (this.displayModal = false);

}
