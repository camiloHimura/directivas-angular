import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaLoaderComponent } from './da-loader.component';

describe('DaLoaderComponent', () => {
  let component: DaLoaderComponent;
  let fixture: ComponentFixture<DaLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
