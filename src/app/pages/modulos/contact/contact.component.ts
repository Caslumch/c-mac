import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Map, divIcon, marker, tileLayer, } from 'leaflet'
import { TraductionService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor(
    private traductionService: TraductionService,
    private translate: TranslateService,
  ) {

  }
  @Input() locale?: any[];
  map: any

  simbolStyle: string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = ` | `;

  social = [
    { nome: 'instagram', link: 'https://www.instagram.com/caslumch/?hl=pt-br', icon: 'pi pi-instagram', },
    { nome: 'Linkedin', link: 'https://www.linkedin.com/in/lucas-machado-16a42422b/', icon: 'pi pi-linkedin', },
    { nome: 'GitHub', link: 'https://github.com/Caslumch', icon: 'pi pi-github', },
    { nome: 'Telefone', link: 'tel:+11963034276', icon: 'pi pi-phone', desc: '+055 (11) 96303-4276' },

  ]
  ehMobile: any
  ngOnInit(): void {
    this.languageUser()
    this.ehMobile = window.screen.width < 992;
    this.maps()


  }

  maps = () => {
    this.locale;
    if (this.map === undefined) {
      this.map = new Map('map').setView([-23.511224828565467, -46.87626884189107], 13);
    } else {
      this.map = ''
      this.map = new Map('map').setView([-23.511224828565467, -46.87626884189107], 13);
    }



    // tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 20,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(this.map); // funciona 

    // tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    //   minZoom: 0,
    //   maxZoom: 20,
    //   attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);


    // tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    //   subdomains: 'abcd',
    //   maxZoom: 20
    // }).addTo(this.map); //funciona 



    tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
      attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 0,
      maxZoom: 22,
      subdomains: 'abcd',
      accessToken: '2j0fNjzrZ6xMbZmjIW7FhMLDCixa8A65hquyivkjVRIcviMF8DgRSKkrNYKBxzgu'
    }).addTo(this.map); //funciona 


    const customIcon = divIcon({
      className: 'pulseMap', // Classe CSS personalizada para o ícone
      html: '', // ícone personalizado usando PrimeNG icons
    });
    
    this.translate.get('contact.popUpMap',).subscribe((translatedText) => {
      marker([-23.511224828565467, -46.87626884189107], { icon: customIcon }).addTo(this.map)
        .bindPopup(translatedText)
        .openPopup();
    });

  }



  userLanguage: any
  languageUser = () => {
    
    this.userLanguage = this.traductionService.getUserLanguage();
    this.translate.setDefaultLang(this.userLanguage);
    
    debugger;
  }

  getLabel(e: any): string {
    return this.translate.instant(e);
  }

  sendDm = () => {
    window.open("https://www.instagram.com/caslumch/?hl=pt-br", "_blank");
  }

}

