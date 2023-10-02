import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  simbol: string = "</"
  ngOnInit(): void {
    
  }

  redes = () => {
    alert('redes')
  }

}
