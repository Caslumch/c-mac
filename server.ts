
import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import * as cors from 'cors';
import * as express from 'express';
var app = express();
var port = 3000;
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
      debugger;
      console.log('Dados recebidos:', response.data);
      return res.json({ data: response.data })
    })
    .catch(error => {
      console.error('Erro na solicitação GET:', error);
    });
})



app.listen(port, () => { // quando ele abrir a porta ele executa tal coisa
  console.log('Server Iniciado!!!')
})