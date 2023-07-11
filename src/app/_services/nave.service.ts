import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespostaAPI } from "../_models/respostaAPI.model";
import { Nave } from "../_models/naves.mode";

@Injectable({
  providedIn: "root",
})
export class NavesService {
  private api_url = "https://swapi.dev/api";
  constructor(private http: HttpClient) {}

  getNaves(): Observable<RespostaAPI<Nave>> {
    let url = `${this.api_url}/starships`;
    return this.http.get<RespostaAPI<Nave>>(url);
  }

  buscaNaves(titulo: string): Observable<RespostaAPI<Nave>> {
    let url = `${this.api_url}/starships/?search=` + titulo;
    return this.http.get<RespostaAPI<Nave>>(url);
  }
}
