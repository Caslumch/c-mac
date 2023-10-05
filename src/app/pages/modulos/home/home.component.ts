import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  simbolStyle : string = 'color: #d4ff5b; cursor: pointer'
  simbol: string = `<\\`
  ngOnInit(): void {
    
  }

  redes = () => {
    alert('redes')
  }

}
