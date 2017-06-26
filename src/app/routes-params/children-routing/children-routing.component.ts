import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-children-routing',
  templateUrl: './children-routing.component.html',
  styleUrls: ['./children-routing.component.css']
})
export class ChildrenRoutingComponent implements OnInit {
  idPage: number;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
            if ( params['id'] != null ) {
              this.setId(params['id']);
            }
         });
  }

  setId(id: number) {
    this.idPage = id;
  }
}
