import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-weather',
  templateUrl: './modal-weather.component.html',
})
export class ModalWeatherComponent implements OnInit {
  constructor() {

  }

  displayModal: boolean = false;

  @Input() dadosWeather: any = [];

  ngOnInit(): void {
    
  }

  openModal = () => (this.displayModal = true);

  closeModal = () => (this.displayModal = false);

}
