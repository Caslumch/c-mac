import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  optionsMenu = [
    {option: 'Sobre', id: 1},
    {option: 'Projetos', id: 2},
    {option: 'Contato', id: 3}
  ]

  ngOnInit(): void {
    
  }
  

}
