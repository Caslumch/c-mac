

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class UserController {
  private sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';
  private sendGridApiKey = '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'; // Substitua com sua API Key do SendGrid

  private _baseUrl = environment.API
  private api = environment.BASE_URL

  constructor(private http: HttpClient) { }

  enviarEmail(destinatario: string, assunto: string, corpo: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.sendGridApiKey}`
    });

    const data = {
      personalizations: [
        {
          to: [{ email: destinatario }],
          subject: assunto,
        },
      ],
      from: { email: 'caslumach@gmail.com' }, // Substitua com seu endereço de email
      content: [{ type: 'text/plain', value: corpo }],
    };

    return this.http.post(this.sendGridApiUrl, data, { headers });
  }

  _baseUrlWatherMap = "https://api.openweathermap.org/data/2.5/"
  private key = "3744c7390deaf333d69741cbcd2df7fd"



  getWatherMap(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this._baseUrl}weather-app`, data, { headers });
  }


}
