import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-resolve-routing',
  templateUrl: './resolve-routing.component.html',
  styleUrls: ['./resolve-routing.component.css']
})
export class ResolveRoutingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.pluck('info')
        .catch(error => error)
        .subscribe(
          info => console.log(info),
          error => console.log('ups! Error getting data')
        );
  }

}
