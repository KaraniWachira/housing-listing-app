import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingLocation} from "../housing-location";
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation" ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  housingLocationList: HousingLocation [] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];


  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationsList: HousingLocation []) => {
      this.housingLocationList = housingLocationsList;
      this.filteredLocationList = housingLocationsList;
    } );
  }

  // check for blank text in the filter text box
  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    // handle the filter
    this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }

}
