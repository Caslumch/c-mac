import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor(
    private translate: TranslateService,
  ) {
    // this.translate.setDefaultLang('en');
  }

  @ViewChild('mContato') mContato?: any;

  simbol: string = `<\\`
  ngOnInit(): void {

  }

  getLabel(e: any): string {
    return this.translate.instant(e);
  }

  redes = () => {
    alert('redes')
  }


  modalInvlidCpf = () => {
    this.mContato.openModal();
  };
  


}
