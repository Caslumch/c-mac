import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor() {}

  @ViewChild('mContato') mContato?: any;

  simbol: string = `<\\`
  ngOnInit(): void {

  }

  redes = () => {
    alert('redes')
  }


  modalInvlidCpf = () => {
    this.mContato.openModal();
  };
  


}
