import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TraductionService {
    private userLanguage: any = localStorage.getItem('languageUser') || 'en-US';

    // Método para emitir um evento

    getLang() {
        const languageUser = navigator.language || 'en-US'
        const verifyStorage = localStorage.getItem('languageUser');
        if (!verifyStorage) {
            this.userLanguage = languageUser
            localStorage.setItem('languageUser', this.userLanguage)
        }

    }

    getUserLanguage() {
        return this.userLanguage
    }

    changeLanguage = (language: string) => {
        return new Promise((r) => {
            location.reload();
            localStorage.setItem('languageUser', language)
            this.userLanguage = localStorage.getItem('languageUser');
        })
    }




}