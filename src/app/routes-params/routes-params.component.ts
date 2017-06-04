import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-routes-params',
  templateUrl: './routes-params.component.html',
  styleUrls: ['./routes-params.component.css']
})
export class RoutesParamsComponent implements OnInit {
  idPage: number;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
            if(params['id']!=null){
              this.setId(params['id']);
            }
         });
  }

  setId(id: number){
    this.idPage = id; 
  }
}
