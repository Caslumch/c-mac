import { Component, OnInit } from '@angular/core';
import { TraductionService } from './core/services/translate.service';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  template: `

  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(
    // public loaderService: LoaderService,
    private traductionService: TraductionService
  ) {

  }

  userLanguage: any


  //1° passo.
  // a primeira vez que o usuario entrar na pagina: 

  // ele deve validar se existe  'language' e se é diferente de undefined, esse atributo vai estar no local storage.

  // caso 'language' não exista no localstorage ele cria o 'language' com o idioma padrão do usuario 



  //                     <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>

  // 2° passo. 




  ngOnInit(): void {
    this.userLanguage = this.traductionService.getLang();
  }



  // getLangStorage = () => {
  //   const verifyStorage = localStorage.getItem('languageUser'); //realiza a verificação de verifyStorage em localstorage, se não tiver ele adiociona um item lá e deixa salvo como true
  //   if (!verifyStorage) {
  //     localStorage.setItem('visitouSite', 'true');
  //   }

  //   setTimeout(() => {
  //     this.initialLoading = false
  //   }, 7000);

  // }


  title = 'cmac.site';
}
