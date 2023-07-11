import { Component } from "@angular/core";
import { StarshipService } from "../_services/starship.service";
import { Starship } from "../_models/starship.model";

@Component({
  templateUrl: "./starship.component.html",
  styleUrls: ["./starship.component.scss"],
})
export class StarshipComponent {

  listData: Starship[] = [];
  columns: string[] = ["name", "model", "starship_class", "manufacturer"];
  searchInput = "";
  loading = true;

  constructor(private StarshipService: StarshipService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.StarshipService.getStarships().subscribe((data) => {
      this.loading = false;
      console.log(data.results);
      this.listData = data.results;
    });
  }

  search() {
    this.loading = true;
    this.StarshipService.searchStarShips(this.searchInput).subscribe((data) => {
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
}
