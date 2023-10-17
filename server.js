"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var axios_1 = require("axios");
var cors = require("cors");
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
        console.log('Dados recebidos:', response.data);
        return res.json({ data: response.data });
    })
        .catch(function (error) {
        console.error('Erro na solicitação GET:', error);
    });
});
var nodemailer = require('nodemailer');
var google = require('googleapis').google;
var expressS = require('express');
var CLIENT_ID = '352498173136-4ipcsvj43dhf6bk7uraumivvcfl10sci.apps.googleusercontent.com';
var CLIENT_SECRET = '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';
var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
var REFRESH_TOKEN = '1//048lihHhcnEn2CgYIARAAGAQSNgF-L9IrPJSRUosh0yWblA-tJv5f_CaAv30RsxOTQIQwhbncPlZsq4hOaBX4M6xi6SD6IAouOg';
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
app.post('mail-google', function (req, resp, next) {
    debugger;
    try {
        var accessToken = oAuth2Client.getAccessToken();
        var transport = nodemailer.createTransport({
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
        var mailOptions = {
            from: 'SENDER NAME <yours authorised email address@gmail.com>',
            to: 'to email address here',
            subject: 'Hello from gmail using API',
            text: 'Hello from gmail email using API',
            html: '<h1>Hello from gmail email using API</h1>',
        };
        var result = transport.sendMail(mailOptions);
        return result;
    }
    catch (error) {
        return error;
    }
});
app.post('/mail-sendGrid', function (req, res, next) {
    debugger;
    var sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';
    var sendGridApiKey = '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';
    var corpo = req.body.corpo;
    var destinatario = 'caslumach@gmail.com';
    var assunto = req.body.assunto;
    var headers = {
        'Content-Type': 'application/json',
        Authorization: "Bearer ".concat(sendGridApiKey)
    };
    var data = {
        personalizations: [
            {
                to: [{ email: destinatario }],
                subject: assunto,
            },
        ],
        from: { email: 'caslumach@gmail.com' },
        content: [{ type: 'text/plain', value: corpo }],
    };
    axios_1.default.post(sendGridApiUrl, data, { headers: headers })
        .then(function (response) {
        // Trate a resposta bem-sucedida aqui, se necessário
        res.status(response.status).json(response.data);
    })
        .catch(function (error) {
        // Trate erros aqui
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ error: 'Erro ao enviar e-mail' });
    });
});
app.listen(port, function () {
    console.log('Server Iniciado!!!');
});
