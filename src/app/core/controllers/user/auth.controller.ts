import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class AuthController {
    private url = 'https://accounts.spotify.com/api/token';
    private client_id = '558fb50a1db142cf8343b0bbc6bd9da2';
    private client_secret = 'a929bedef31d4c9bb67ab40c44e558f9';

    private apiUrl = 'https://api.spotify.com/v1/me/player/currently-playing';
    // private accessToken = 'seu_token_de_acesso_aqui'; // Substitua pelo seu token


    constructor(private http: HttpClient) { }

    getToken(): Observable<any> {
        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(this.client_id + ':' + this.client_secret),
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        const body = 'grant_type=client_credentials';
        return this.http.post(this.url, body, { headers });




    }

    // getCurrentlyPlaying(token: string): Observable<any> {
    //     const headers = new HttpHeaders({
    //         'Accept-Encoding': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     })
    //     return this.http.get(this.apiUrl, { headers: headers })
    // }

    getCurrentlyPlaying(token: string) {
        const body = 'grant_type=client_credentials';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        axios.get<any>('https://api.spotify.com/v1/me/player/currently-playing', { headers })
            .then((playingTrackRes) => {
                // Aqui você pode tratar a resposta da requisição Axios
                console.log(playingTrackRes);
            })
            .catch((error) => {
                // Lide com erros, se necessário
                console.error(error);
            });
    }



}
