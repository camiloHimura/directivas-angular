import { Component, OnInit } from '@angular/core';
import { ObservablesService } from './../services/observables.service';
import { DaLoaderService } from './../da-loader/da-loader.service';

@Component({
  selector: 'app-observables',
  providers: [ObservablesService],
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  getMap: string;
  getJson: string;
  getError: string;
  getWhitDo: string;

  constructor(private observablesService: ObservablesService,
              private daLoaderService: DaLoaderService) { }

  ngOnInit() {
    this.daLoaderService.show();

    this.observablesService.getFirst()
        .subscribe(info => this.getJson = info.json());

    this.observablesService.getMap()
        .subscribe(info => { this.getMap = info; this.daLoaderService.close(); });

    this.observablesService.getError()
        .subscribe(
          info => { /*this.getError = info;*/ },
          error => { this.getError = error; console.log(error); }
          );

    this.observablesService.getWhitDo()
        .subscribe(info => { this.getWhitDo = info; });
  }
}
