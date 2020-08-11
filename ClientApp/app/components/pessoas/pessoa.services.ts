import { Injectable, Inject } from "@angular/core";

import { IPessoa } from "./pessoa";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

@Injectable()

export class PessoasService {

    private apiUrl = this.baseUrl + "api/Pessoas"

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {

    }

    getPessoas() {
        return this.http.get(this.apiUrl);
    }
}