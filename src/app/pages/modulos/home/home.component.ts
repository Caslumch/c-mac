import { Component, OnInit } from '@angular/core';
import { UserController } from 'src/app/core/controllers/user/user.controller';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private userController: UserController
  ) { }

  latitude: number = 0;
  longitude: number = 0;

  simbolStyle: string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = `<\\`;



  async ngOnInit(): Promise<void> {
    // try {
    //   await this.getLocale(); // Aguarda a conclusão de getLocale
    //   this.getWatherMap(); // Chama getWatherMap após a conclusão de getLocale
    // } catch (error) {
    //   console.error(error);
    // }

    this.getLocale()

  }

  getLocale = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.getWatherMap()
        });
      } else {
        console.log("Geolocalização não está disponível no seu navegador.");
      }
    } catch (error) {
      console.log(error);
    }
    debugger;

  }

  getWatherMap = () => {
    debugger;
    this.userController.getWatherMap(this.latitude, this.longitude).subscribe({
      next: (r) => {
        debugger;
        console.log(r);
      },
      error: () => {

      }
    })

  }


  redes = () => {
    alert('redes')
  }



}
