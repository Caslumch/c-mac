
import { HttpHeaders } from '@angular/common/http';
import * as express from 'express';
import axios from 'axios';
import * as cors from 'cors';
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
require('dotenv').config()


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

app.post('/send-mail', (req, res) => {
  const sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';
  const sendGridApiKey = process.env['SEND_KEY'];

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sendGridApiKey}`
  };

  const data = {
    personalizations: [
      {
        to: [{ email: req.body.destinatario }],
        subject: req.body.assunto,
      },
    ],
    from: { email: 'caslumach@gmail.com' },
    content: [{ type: 'text/plain', value: req.body.corpo }],
  };

  axios.post(sendGridApiUrl, data, { headers })
    .then((response) => {
      console.log('Resposta do servidor:', response.data);
      return res.json({ message: 'E-mail enviado com sucesso' }); // Apenas retornando uma mensagem de sucesso
    })
    .catch((error) => {
      console.error('Erro ao enviar a solicitação:', error);
      return res.status(500).json({ error: 'Erro ao enviar o e-mail' }); // Tratamento de erro adequado
    });
});



app.listen(port, () => { // quando ele abrir a porta ele executa tal coisa
  console.log('Server Iniciado!!!')
})


