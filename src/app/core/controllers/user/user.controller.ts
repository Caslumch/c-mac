

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserController {
  private sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';
  private sendGridApiKey = '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'; // Substitua com sua API Key do SendGrid

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

  city = 'São Paulo'

  // getWatherMap = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
  // .then(response => response.json())
  // .then(data => {
  //   // Faça algo com os dados da resposta
  //   console.log(data);
  //   
  //   return data
  // })
  // .catch(error => {
  //   // Trate os erros
  //   console.error(error);
  // });


  getWatherMap(latitude: number, longitude: number): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.key}&lang=pt_br&units=metric
    `)
  }


}
