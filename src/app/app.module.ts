import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./_shared/header/header.component";
import { FilmsComponent } from "./films/films.component";
import { StarshipComponent } from "./starships/starship.component";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from './_shared/dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FilmsComponent, StarshipComponent, DialogComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTableModule, FormsModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
