import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy},
              ]
})
export class AppComponent {
  location: Location;
  title: String = 'funciona test';
  urlLoader = 'solos';

  constructor(location: Location) {
      this.location = location;
      console.log(this.location);
  }
}
