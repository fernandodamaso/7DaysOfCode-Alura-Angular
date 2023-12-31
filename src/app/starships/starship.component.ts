import { Component } from "@angular/core";
import { StarshipService } from "../_services/starship.service";
import { Starship } from "../_models/starship.model";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../_shared/dialog/dialog.component";

@Component({
  templateUrl: "./starship.component.html",
  styleUrls: ["./starship.component.scss"],
})
export class StarshipComponent {
  listData: Starship[] = [];
  columns: string[] = ["name", "model", "starship_class", "manufacturer"];
  searchInput = "";
  loading = true;
  totalStarships!: number;
  pageIndex: number = 1;

  constructor(private StarshipService: StarshipService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.StarshipService.getStarships(this.pageIndex).subscribe((data) => {
      this.totalStarships = data.count;
      this.loading = false;
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

  openShip(event: any) {
    console.log(event);
    this.dialog.open(DialogComponent, {
      data: {
        ship: event,
      },
    });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    const pageNumber = event.pageIndex + 1;
    this.loading = true;
    this.StarshipService.getStarships(pageNumber).subscribe((data) => {
      this.totalStarships = data.count;
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
