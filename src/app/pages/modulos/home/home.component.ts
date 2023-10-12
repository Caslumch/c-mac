import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthController } from 'src/app/core/controllers/user/auth.controller';
import { UserController } from 'src/app/core/controllers/user/user.controller';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  constructor(
    private userController: UserController,
    private authController: AuthController
  ) { }

  @ViewChild('mWeather') mWeather?: any;

  latitude: number = 0;
  longitude: number = 0;

  simbolStyle: string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = `<\\`;
  ehMobile = false


  dadosTempo = [
    { id: 1, temp: '> 25', Title: 'Na sua cidade está Ensolarado', img: '' },
    { id: 2, temp: '16 - 25', Title: 'Na sua cidade está Parcialmente ensolarado com possíveis nuvens.', img: '' },
    { id: 3, temp: '10 - 15', Title: 'Na sua cidade está Nublado com possibilidade de chuva leve.', img: '' },
    { id: 4, temp: '< 10', Title: 'Na sua cidade está Nublado com chuva moderada.', img: '' },
    { id: 5, temp: '< 10', Title: 'Na sua cidade está Chuvoso com possibilidade de trovoadas.', img: '' },
    { id: 6, temp: '< 0', Title: 'Na sua cidade está Frio e com possibilidade de neve.', img: '' },
    { id: 7, temp: '> 35', Title: 'Na sua cidade está Muito quente e ensolarado, risco de calor intenso.', img: '' },
    { id: 9, temp: '= 0', Title: 'Frio com possibilidade de geada', img: '' },
  ];






  async ngOnInit(): Promise<void> {
    this.getLocale()
    this.getAuth()
    setInterval(this.close, 11000);

  }

  getAuth = () => {
    this.authController.getToken().subscribe({
      next: (resp) => {
        this.authController.getCurrentlyPlaying(resp.access_token)
      }
    })
  }

  position: string = 'bottomright';
  modalInvlidCpf = () => {

  };

  getLocale = async () => {
    this.ehMobile = window.screen.width < 992;
    if (!this.ehMobile) {
      try {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.getWatherMap();
          });
        } else {
          console.log("Geolocalização não está disponível no seu navegador.");
        }
      } catch (error) {
        console.log(error);
      }
    }

  }

  dadosWeather: any
  src: any
  dados: any = []
  getWatherMap = () => {
    this.userController.getWatherMap(this.latitude, this.longitude).subscribe({
      next: (r) => {
        this.dadosWeather = r
        this.src = this.dadosWeather?.weather[0].icon
        console.log(Math.floor(this.dadosWeather.main.temp));
        this.dados = this.dadosTempo.filter((item: any) => item.temp === Math.floor(this.dadosWeather.main.temp))
        this.mWeather.openModal();
      },
      error: () => {

      }
    })

  }

  close = () => {
    this.mWeather.closeModal()
  }








}
