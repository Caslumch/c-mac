import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-viewer',
  templateUrl: './modal-viewer.component.html',
})
export class ModalViewerComponent {
  constructor(

  ) {

  }


  displayModal = false;
  ehMobile: boolean = false;

  destinatario = 'caslumach@gmail.com'


  ngOnInit(): void {
    this.ehMobile = window.screen.width < 992;

  }

  openModal = () => (this.displayModal = true);

  closeModal = () => (this.displayModal = false);
}
