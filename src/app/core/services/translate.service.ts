import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TraductionService {
    private userLanguage: any = localStorage.getItem('languageUser');

    // Método para emitir um evento

    getLang() {
        const languageUser = navigator.language || 'en'
        const verifyStorage = localStorage.getItem('languageUser');
        if (!verifyStorage) {
            this.userLanguage = languageUser
            localStorage.setItem('languageUser', this.userLanguage)
        }
        debugger;
    }

    getUserLanguage() {
        return this.userLanguage
    }

    changeLanguage = (language: string) => {
        localStorage.setItem('languageUser', language)
        this.userLanguage = localStorage.getItem('languageUser');
         location.reload();
        debugger;
       
        // aqui ele vai alterar o language o local storage e recarregar a pagina 
    }


}