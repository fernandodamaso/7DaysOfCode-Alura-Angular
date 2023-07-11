import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespostaAPI } from "../_models/respostaAPI.model";
import { filme } from "../_models/filme.model";

@Injectable({
  providedIn: "root",
})
export class FilmesService {
  private api_url = "https://swapi.dev/api";
  constructor(private http: HttpClient) {}

  getFilmes(): Observable<RespostaAPI<filme>> {
    let url = `${this.api_url}/films`;
    return this.http.get<RespostaAPI<filme>>(url);
  }
}
