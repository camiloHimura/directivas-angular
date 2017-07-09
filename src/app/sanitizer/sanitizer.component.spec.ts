import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitizerComponent } from './sanitizer.component';

describe('SanitizerComponent', () => {
  let component: SanitizerComponent;
  let fixture: ComponentFixture<SanitizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
