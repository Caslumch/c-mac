import { Component, Input, OnInit } from '@angular/core';
import { Map, marker, tileLayer, } from 'leaflet'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  @Input() locale?: any[];
  map: any

  simbolStyle: string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = ` | `;

  social = [
    { nome: 'instagram', link: '', icon: 'pi pi-instagram', },
    { nome: 'Linkedin', link: '', icon: 'pi pi-linkedin', },
    { nome: 'GitHub', link: '', icon: 'pi pi-github', },
    { nome: 'Telefone', link: '', icon: 'pi pi-phone', },

  ]
  ehMobile: any 
  ngOnInit(): void {
    this.ehMobile = window.screen.width < 992;
    console.log(this.locale);
    this.locale;
    if (this.map === undefined) {
      this.map = new Map('map').setView([-23.511224828565467, -46.87626884189107], 13);
    } else {
      this.map = ''
      this.map = new Map('map').setView([-23.511224828565467, -46.87626884189107], 13);
    }

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    //   minZoom: 0,
    //   maxZoom: 20,
    //   attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);

    marker([-23.511224828565467, -46.87626884189107]).addTo(this.map)
      .bindPopup('Eu estou aqui')
      .openPopup();
  }

  ngAfterViewInit(): void {

  }

}

