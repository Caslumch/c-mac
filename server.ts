
import { HttpHeaders } from '@angular/common/http';
import * as express from 'express';
import axios from 'axios';
import * as cors from 'cors';
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
  const n = 'bateu em'
  return res.json({ data: n })
});


app.post('/weather-app', (req, res) => {
  const lat = req.body.latitude
  const long = req.body.longitude
  const key = "3744c7390deaf333d69741cbcd2df7fd"

  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&lang=pt_br&units=metric
  `)
    .then(response => {
      console.log('Dados recebidos:', response.data);
      return res.json({ data: response.data })
    })
    .catch(error => {
      console.error('Erro na solicitação GET:', error);
    });
})

const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const expressS = require('express');

const CLIENT_ID = '352498173136-4ipcsvj43dhf6bk7uraumivvcfl10sci.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//048lihHhcnEn2CgYIARAAGAQSNgF-L9IrPJSRUosh0yWblA-tJv5f_CaAv30RsxOTQIQwhbncPlZsq4hOaBX4M6xi6SD6IAouOg';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.post('mail-google', (req, resp, next) => {
  debugger;
  try {
    const accessToken = oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'yours authorised email address',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'SENDER NAME <yours authorised email address@gmail.com>',
      to: 'to email address here',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>',
    };

    const result = transport.sendMail(mailOptions);
    return result;

  }
  catch (error) {
    return error;

  }
})

app.post('/mail-sendGrid', (req, res, next) => {
  debugger;
  const sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';
  const sendGridApiKey = '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';

  const corpo = req.body.corpo;
  const destinatario = 'caslumach@gmail.com';
  const assunto = req.body.assunto;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sendGridApiKey}`
  };

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

  axios.post(sendGridApiUrl, data, { headers })
    .then(response => {
      // Trate a resposta bem-sucedida aqui, se necessário
      res.status(response.status).json(response.data);
    })
    .catch(error => {
      // Trate erros aqui
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ error: 'Erro ao enviar e-mail' });
    });
});





app.listen(port, () => { // quando ele abrir a porta ele executa tal coisa
  console.log('Server Iniciado!!!')
})


