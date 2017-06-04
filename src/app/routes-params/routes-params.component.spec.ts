import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesParamsComponent } from './routes-params.component';

describe('RoutesParamsComponent', () => {
  let component: RoutesParamsComponent;
  let fixture: ComponentFixture<RoutesParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
