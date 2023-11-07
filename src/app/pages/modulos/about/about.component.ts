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
  ){}

  ngOnInit(): void {
    
  }
  
  userLanguage: any
    languageUser = () => {
      this.userLanguage = this.traductionService.getUserLanguage();
      this.translate.setDefaultLang(this.userLanguage);
      
    }

}
