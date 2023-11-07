import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TraductionService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-modal-viewer',
  templateUrl: './modal-viewer.component.html',
})
export class ModalViewerComponent implements OnInit {

  @Input() selectItem?: any;
  constructor(
    private traductionService: TraductionService,
    private translate: TranslateService,
  ) {

  }


  displayModal = false;
  ehMobile: boolean = false;

  destinatario = 'caslumach@gmail.com'


  ngOnInit(): void {
    this.ehMobile = window.screen.width < 992;

    this.languageUser()
  }

  getLabel(e: any): string {
    return this.translate.instant(e);
  }

  userLanguage: any
  languageUser = () => {
    this.userLanguage = this.traductionService.getUserLanguage();
    this.translate.setDefaultLang(this.userLanguage);
  }

  getTranslationKey() {
    return `modalViewer.${this.selectItem?.nome.toLowerCase()}.desc`;
  }

  openModal = () => (this.displayModal = true);

  closeModal = () => (this.displayModal = false);
}
