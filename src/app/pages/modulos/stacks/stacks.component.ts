import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
})
export class StacksComponent implements OnInit {

  stacks = [
    { nome: 'csite', tipo: 'Código', src: './assets/stack/csite.png', },
    { nome: 'VS Code', tipo: 'Código', src: './assets/stack/vscode.png', },
    { nome: 'The News', tipo: 'Noticias', src: './assets/stack/thenews.png', },
    { nome: 'Chat Gpt', tipo: 'Serviço', src: './assets/stack/gpt.png', },
    { nome: 'Adobe Ilustrator', tipo: 'Design', src: './assets/stack/ai.png', },
    { nome: 'Adobe Lightroom', tipo: 'Fotografia', src: './assets/stack/lr.png', },
    { nome: 'Capcut', tipo: 'Vídeo', src: './assets/stack/capcut.png', },
    { nome: 'Figma', tipo: 'Design', src: './assets/stack/figma.png', },
    { nome: 'Spotify', tipo: 'Música', src: './assets/stack/spotify.png', },
    { nome: 'Notion', tipo: 'Produtividade', src: './assets/stack/notion.png', },
  ]

  ngOnInit(): void {
    debugger;

  }

}
