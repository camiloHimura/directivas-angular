import { Component, Input, OnInit } from '@angular/core';
import { DaLoaderService } from './da-loader.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-da-loader',
  templateUrl: './da-loader.component.html',
  styleUrls: ['./da-loader.component.css']
})
export class DaLoaderComponent implements OnInit {
  @Input() urlLoader: string;
  isUrl: boolean = false;
  showLoader: boolean = false;

  constructor(private daLoaderService: DaLoaderService) { }

  ngOnInit() {
    this.daLoaderService.getObservable()
          .subscribe((info) => {
            info === true ? this.showLoader = true : this.showLoader = false;
          });

    this.config();
  }

  config() {
    if (typeof this.urlLoader !== 'undefined' || this.urlLoader !== '' ) {
      this.isUrl = true;
    }
  }
}
