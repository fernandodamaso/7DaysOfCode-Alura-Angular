import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { responseAPI } from "../_models/responseAPI.model";
import { film } from "../_models/film.model";

@Injectable({
  providedIn: "root",
})
export class FilmsService {
  private api_url = "https://swapi.dev/api";
  constructor(private http: HttpClient) {}

  getFilms(): Observable<responseAPI<film>> {
    let url = `${this.api_url}/films`;
    return this.http.get<responseAPI<film>>(url);
  }

  searchFilms(titulo: string): Observable<responseAPI<film>> {
    let url = `${this.api_url}/films/?search=` + titulo;
    return this.http.get<responseAPI<film>>(url);
  }
}
