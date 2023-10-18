"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var cors = require("cors");
var express = require("express");
var app = express();
var port = 3000;
app.use(cors());
app.use(express.json());
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
        debugger;
        console.log('Dados recebidos:', response.data);
        return res.json({ data: response.data });
    })
        .catch(function (error) {
        console.error('Erro na solicitação GET:', error);
    });
});
app.post('/send-mail', function (req, res) {
    var sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';
    var sendGridApiKey = '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';
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
    })
        .catch(function (error) {
        console.error('Erro ao enviar a solicitação:', error);
    });
});
app.listen(port, function () {
    console.log('Server Iniciado!!!');
});
