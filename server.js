"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var axios_1 = require("axios");
var cors = require("cors");
var app = express();
// const port = 3000;
var port = 4000;
app.use(cors());
app.use(express.json());
require('dotenv').config();
app.get('/', function (req, res) {
    var n = 'bateu em';
    return res.json({ data: n });
});
app.post('/weather-app', function (req, res) {
    var lat = req.body.latitude;
    var long = req.body.longitude;
    var key = "3744c7390deaf333d69741cbcd2df7fd";
    axios_1.default.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(long, "&appid=").concat(key, "&lang=pt_br&units=metric\n  "))
        .then(function (response) {
        console.log('Dados recebidos:', response.data);
        return res.json({ data: response.data });
    })
        .catch(function (error) {
        console.error('Erro na solicitação GET:', error);
    });
});
app.post('/send-mail', function (req, res) {
    var sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';
    var sendGridApiKey = process.env['SEND_KEY'];
    var headers = {
        'Content-Type': 'application/json',
        Authorization: "Bearer ".concat(sendGridApiKey)
    };
    var data = {
        personalizations: [
            {
                to: [{ email: req.body.destinatario }],
                subject: req.body.assunto,
            },
        ],
        from: { email: 'caslumach@gmail.com' },
        content: [{ type: 'text/plain', value: req.body.corpo }],
    };
    axios_1.default.post(sendGridApiUrl, data, { headers: headers })
        .then(function (response) {
        console.log('Resposta do servidor:', response.data);
        return res.json({ message: 'E-mail enviado com sucesso' }); // Apenas retornando uma mensagem de sucesso
    })
        .catch(function (error) {
        console.error('Erro ao enviar a solicitação:', error);
        return res.status(500).json({ error: 'Erro ao enviar o e-mail' }); // Tratamento de erro adequado
    });
});
app.listen(port, '0.0.0.0', function () {
    console.log('Server Iniciado!!!');
});
