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
app.listen(port, function () {
    console.log('Server Iniciado!!!');
});
