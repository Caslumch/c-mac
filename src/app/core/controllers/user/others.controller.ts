import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: "root" // 
})
export class OtherController {
    _baseUrl = 'http://localhost:3000/'
    constructor(private http: HttpClient) { }

    getDados = async () => { //ELE É PROMISSE POR QUE uso a async (UMA promessa de que vai retornar alguma coisa)
        return lastValueFrom(this.http.get<any>(this._baseUrl))
    }
}