import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  isShow: string = 'yes';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  alertInfo() {
    alert('alert desde view');
    console.log('alert desde view');
  }

  emitter(){
    console.log('emitter view');
    this.onClick.emit();
  }

}
