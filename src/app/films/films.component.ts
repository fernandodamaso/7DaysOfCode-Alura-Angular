import { Component } from "@angular/core";
import { film } from "../_models/film.model";
import { FilmsService } from "../_services/films.service";

@Component({
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.scss"],
})
export class FilmsComponent {
  listData: film[] = [];
  columns: string[] = ["title", "director", "producer", "release_date"];
  searchInput = "";
  loading = true;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.filmsService.getFilms().subscribe((data) => {
      this.loading = false;
      this.listData = data.results;
    });
  }

  search() {
    this.loading = true;
    this.filmsService.searchFilms(this.searchInput).subscribe((data) => {
      this.loading = false;
      this.listData = data.results;
    });
  }

  clearSearch() {
    this.searchInput = "";
    this.listData = [];
    this.loading = true;
    this.getData();
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString("pt-BR");
  }
}
