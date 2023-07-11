import { Component } from "@angular/core";
import { NavesService } from "../_services/nave.service";
import { Nave } from "../_models/naves.mode";

@Component({
  templateUrl: "./naves.component.html",
  styleUrls: ["./naves.component.scss"],
})
export class NavesComponent {
  listaNaves: Nave[] = [];
  columns: string[] = ["name", "model", "starship_class", "manufacturer"];
  buscaTitulo = "";
  loading = true;

  constructor(private NavesService: NavesService) {}

  ngOnInit(): void {
    this.getNaves();
  }

  getNaves() {
    this.NavesService.getNaves().subscribe((data) => {
      this.loading = false;
      console.log(data.results)
      this.listaNaves = data.results;
    });
  }

  buscarPorTitulo() {
    this.loading = true;
    this.NavesService.buscaNaves(this.buscaTitulo).subscribe((data) => {
      this.loading = false;
      this.listaNaves = data.results;
    });
  }

  limparBusca() {
    this.buscaTitulo = "";
    this.listaNaves = [];
    this.loading = true;
    this.getNaves();
  }

  formatarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString("pt-BR");
  }
}
