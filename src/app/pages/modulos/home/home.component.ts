import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthController } from 'src/app/core/controllers/user/auth.controller';
import { OtherController } from 'src/app/core/controllers/user/others.controller';
import { UserController } from 'src/app/core/controllers/user/user.controller';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  constructor(
    private userController: UserController,
    private authController: AuthController,
  ) { }

  @ViewChild('mWeather') mWeather?: any;

  latitude: number = 0;
  longitude: number = 0;

  simbolStyle: string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = `<\\`;
  ehMobile = false

  async ngOnInit(): Promise<void> {
    this.getLocale()
    this.getAuth();
    setInterval(this.close, 11000);
  }

  getAuth = () => {
    this.authController.getToken().subscribe({
      next: (resp) => {
        debugger;
        // this.authController.getCurrentlyPlaying(resp.access_token)
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
            const data =
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,

            }
            this.getWatherMap(data);
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
  getWatherMap = (data: any) => {
    this.userController.getWatherMap(data).subscribe({
      next: (r) => {
        this.dadosWeather = r.data
        this.src = this.dadosWeather?.weather[0]?.icon
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
