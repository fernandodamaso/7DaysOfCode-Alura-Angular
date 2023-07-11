import { Component } from "@angular/core";
import { FilmesService } from "../_services/filmes.service";
import { filme } from "../_models/filme.model";

@Component({
  templateUrl: "./filmes.component.html",
  styleUrls: ["./filmes.component.scss"],
})
export class FilmesComponent {
  listaFilmes: filme[] = [];
  columns: string[] = ["title", "director", "producer", "release_date"];
  buscaTitulo = "";

  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.getFilmes();
  }

  getFilmes() {
    this.filmesService.getFilmes().subscribe((data) => {
      console.log(data);
      this.listaFilmes = data.results;
    });
  }

  buscarPorTitulo() {
    this.filmesService.buscaFilmes(this.buscaTitulo).subscribe((data) => {
      console.log(data);
      this.listaFilmes = data.results;
    });
  }

  limparBusca() {
    this.buscaTitulo = "";
    this.listaFilmes = [];
    this.getFilmes();
  }

  formatarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString("pt-BR");
  }
}
