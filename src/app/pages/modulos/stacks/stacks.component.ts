import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
})
export class StacksComponent implements OnInit {

  @ViewChild('mViewer') mViewer?: any;

  stacks = [
    { nome: 'csite', tipo: 'Código', src: './assets/stack/csite.png', link: 'https://caslumch.github.io/c-mac' },
    { nome: 'VS Code', tipo: 'Código', src: './assets/stack/vscode.png', link: 'https://code.visualstudio.com' },
    { nome: 'The News', tipo: 'Noticias', src: './assets/stack/thenews.png', link: 'https://thenewscc.com.br' },
    { nome: 'Chat Gpt', tipo: 'Serviço', src: './assets/stack/gpt.png', link: 'https://chat.openai.com' },
    { nome: 'Adobe Ilustrator', tipo: 'Design', src: './assets/stack/ai.png', link: 'https://www.adobe.com/br/products/illustrator/campaign/pricing.html?sdid=KQPNY&mv=search&ef_id=Cj0KCQjwqP2pBhDMARIsAJQ0Czro6yvgVd00GZObt8ZMSqY2rGkXuKcrkj1EXfiaLGPZb76lGXIX2fEaAqj9EALw_wcB:G:s&s_kwcid=AL!3085!3!442396626641!e!!g!!illustrator!188190582!10039578942&gad_source=1&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0Czro6yvgVd00GZObt8ZMSqY2rGkXuKcrkj1EXfiaLGPZb76lGXIX2fEaAqj9EALw_wcB' },
    { nome: 'Adobe Lightroom', tipo: 'Fotografia', src: './assets/stack/lr.png', link: 'https://www.adobe.com/br/products/photoshop-lightroom/campaign/pricing.html?sdid=KQPOO&mv=search&ef_id=Cj0KCQjwqP2pBhDMARIsAJQ0Czo2oBOoiKRt88lYgrrZYibV3fqQ2nxs6y5lb0O7VJ_dKeY4Yrurp0IaAoFKEALw_wcB:G:s&s_kwcid=AL!3085!3!442396628369!e!!g!!lightroom!956047915!50099538400&gad_source=1&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0Czo2oBOoiKRt88lYgrrZYibV3fqQ2nxs6y5lb0O7VJ_dKeY4Yrurp0IaAoFKEALw_wcB' },
    { nome: 'Capcut', tipo: 'Vídeo', src: './assets/stack/capcut.png', link: 'https://www.capcut.com/pt-br/' },
    { nome: 'Figma', tipo: 'Design', src: './assets/stack/figma.png', link: 'https://www.figma.com' },
    { nome: 'Spotify', tipo: 'Música', src: './assets/stack/spotify.png', link: 'https://www.spotify.com/br-pt/premium/?utm_source=br-pt_brand_contextual-desktop_text&utm_medium=paidsearch&utm_campaign=alwayson_latam_br_premiumbusiness_core_brand+contextual-desktop+text+exact+br-pt+google&gad_source=1&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0CzrTE65v6kOBaIJgkvcg66cZ1qotQfJT7Rf2kbIu63HgoYzZbam1rAAaAsrbEALw_wcB&gclsrc=aw.ds' },
    { nome: 'Notion', tipo: 'Produtividade', src: './assets/stack/notion.png', link: 'https://www.notion.so/signup?utm_source=affl&utm_medium=nguyenthibinh8753&pscd=affiliate.notion.so&ps_partner_key=bmd1eWVudGhpYmluaDg3NTM&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0Czru5QQnH5ctYojHTaeHmwxMNbner9pM7a-VJmGB87P2iDNjIKCQ4Q0aAsa7EALw_wcB&ps_xid=82D49naU0lFkBo&gsxid=82D49naU0lFkBo&gspk=bmd1eWVudGhpYmluaDg3NTM' },
  ]

  viewListOrNot: boolean = true

  selectStack: any

  ngOnInit(): void {
    debugger;

  }

  getList(e: any) {
    this.viewListOrNot = !this.viewListOrNot
    debugger;
  }

  viewStack = (e: any) => {
    window.open(e.link, "_blank");
    debugger;
    // console.log(e)
    // debugger;
    // this.mViewer.openModal();
  };


}
