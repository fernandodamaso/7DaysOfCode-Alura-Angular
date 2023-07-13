//imports
import { Component } from "@angular/core";
import { film } from "../_models/film.model";
import { FilmsService } from "../_services/films.service";

@Component({
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.scss"],
})
export class FilmsComponent {
  listData: film[] = []; //array of data to be shown on the screen
  columns: string[] = ["title", "director", "producer", "release_date"]; //columns to be shown on the screen
  searchInput = ""; //search input
  loading = true; //loading state

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.getData();
  }

  //get data from the api
  getData() {
    this.filmsService.getFilms().subscribe((data) => {
      this.loading = false;
      this.listData = data.results;
    });
  }

  //search by title
  search() {
    this.loading = true;
    this.filmsService.searchFilms(this.searchInput).subscribe((data) => {
      this.loading = false;
      this.listData = data.results;
    });
  }

  //clear the search and show all the films
  clearSearch() {
    this.searchInput = "";
    this.listData = [];
    this.loading = true;
    this.getData();
  }

  //format the date to a more readable format
  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString("pt-BR");
  }
}
