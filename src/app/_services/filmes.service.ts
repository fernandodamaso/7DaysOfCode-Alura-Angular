import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FilmesService {
  constructor(private http: HttpClient) {}

  getFilmes() {
    return this.http.get<any>("assets/filmes.json");
  }
}
