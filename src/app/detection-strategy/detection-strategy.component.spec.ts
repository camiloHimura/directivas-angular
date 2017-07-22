import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionStrategyComponent } from './detection-strategy.component';

describe('DetectionStrategyComponent', () => {
  let component: DetectionStrategyComponent;
  let fixture: ComponentFixture<DetectionStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
