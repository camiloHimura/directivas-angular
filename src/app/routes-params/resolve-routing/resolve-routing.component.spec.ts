import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveRoutingComponent } from './resolve-routing.component';

describe('ResolveRoutingComponent', () => {
  let component: ResolveRoutingComponent;
  let fixture: ComponentFixture<ResolveRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
