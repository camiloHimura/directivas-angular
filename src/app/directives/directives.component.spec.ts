import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DirectivesComponent } from './directives.component';

describe('DirectivesComponent', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Show title "Ng Class"', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.titleNgClass'));
    el = de.nativeElement;
    expect(el.textContent).toContain('Ng Class');
  });

  it('Show var showContend"s value', () => {
    fixture.detectChanges();
    console.log(component.showContend);
    expect(component.showContend).toEqual(true);
  });

  it('Show var showCase"s value', () => {
    fixture.detectChanges();
    console.log(component.showCase);
    expect(component.showCase).toEqual('1');
  });


});
