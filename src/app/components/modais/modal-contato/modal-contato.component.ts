import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
})
export class ModalContatoComponent implements OnInit {
  constructor() {}
  displayModal = false;
  ehMobile: boolean = false;


  ngOnInit(): void {
    this.ehMobile = window.screen.width < 992;

  }

  openModal = () => (this.displayModal = true);
}
