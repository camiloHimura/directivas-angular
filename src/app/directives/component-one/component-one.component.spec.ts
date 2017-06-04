import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenOneComponent } from './componen-one.component';

describe('ComponenOneComponent', () => {
  let component: ComponenOneComponent;
  let fixture: ComponentFixture<ComponenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
