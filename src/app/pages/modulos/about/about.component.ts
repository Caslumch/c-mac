import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TraductionService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  // param = { value: 'world' };
  constructor(
    private traductionService: TraductionService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.languageUser()
  }

  translationLoaded: boolean = false;

  // getLabel(): string {
  //   if (this.userLanguage === 'pt-BR') {
  //     this.translationLoaded = true; // Marcar a tradução como carregada
  //     return this.translate.instant('ABOUTME.textPt');
  //   } else {
  //     this.translationLoaded = true; // Marcar a tradução como carregada
  //     return this.translate.instant('ABOUTME.textUs');
  //   }
  // }

  translatedText: string = '';
  getLabel(): void {
    if (this.userLanguage === 'pt-BR') {
      this.translate.get('ABOUTME.textPt').subscribe((translation) => {
        this.translatedText = translation;
      });
    } else {
      this.translate.get('ABOUTME.textUs').subscribe((translation) => { // realiza o get com a chave do json e busca a tradução
        this.translatedText = translation;
      });
    }
  }

  userLanguage: any
  languageUser = () => {
    this.userLanguage = this.traductionService.getUserLanguage();
    this.translate.setDefaultLang(this.userLanguage);
    this.getLabel()
  }

}
