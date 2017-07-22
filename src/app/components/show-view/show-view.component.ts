import { AfterContentInit, Component, ContentChild, ContentChildren, OnDestroy, OnInit, QueryList} from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-show-view',
  templateUrl: './show-view.component.html',
  styleUrls: ['./show-view.component.css']
})
export class ShowViewComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChild(ViewComponent) view: ViewComponent;
  @ContentChildren(ViewComponent) public views: QueryList<ViewComponent>;
  clickSubcription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('view');
    console.log(this.view);
    this.clickSubcription = this.view.onClick.subscribe(() => {console.log('escucho emiter hijo'); });
    console.log('views');
     this.views.forEach(ele => { console.log(ele); });
  }

  ngOnDestroy() {
    this.clickSubcription.unsubscribe();
  }
}
