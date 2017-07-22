import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContendComponent } from './ng-contend.component';

describe('NgContendComponent', () => {
  let component: NgContendComponent;
  let fixture: ComponentFixture<NgContendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
