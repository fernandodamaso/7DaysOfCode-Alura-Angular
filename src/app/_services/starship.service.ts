import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { responseAPI } from "../_models/responseAPI.model";
import { Starship } from "../_models/starship.model";

@Injectable({
  providedIn: "root",
})
export class StarshipService {
  private api_url = "https://swapi.dev/api";
  constructor(private http: HttpClient) {}

  getStarships(): Observable<responseAPI<Starship>> {
    let url = `${this.api_url}/starships`;
    return this.http.get<responseAPI<Starship>>(url);
  }

  searchStarShips(titulo: string): Observable<responseAPI<Starship>> {
    let url = `${this.api_url}/starships/?search=` + titulo;
    return this.http.get<responseAPI<Starship>>(url);
  }
}
