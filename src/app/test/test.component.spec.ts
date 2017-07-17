import { debug } from 'util';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TestComponent } from './test.component';
import { By } from '@angular/platform-browser';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    }).compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        debugElement = fixture.debugElement.query(By.css('h1'));
        htmlElement = debugElement.nativeElement;
    });
  }));


  it('Componente creado', () => expect(component).toBeDefined() );

  it('Muestra el numero actual del contador', () => {
    //Muestra en pantalla el numero 1
    expect(htmlElement.textContent).toEqual('numero: 1');
  });

  it('Incrementa uno a la variable count', () => {
    let initialValue = component.counter;
    component.increment();
    let newValue = component.counter;
    expect(newValue).toBeGreaterThan(initialValue);
  });

  it('Incrementa uno y muestra el resultado', () => {
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('numero: 2');
  });

  it('Decrementa uno a la variable count', () => {
    let initialValue = component.counter;
    component.decrement();
    let newValue = component.counter;
    expect(newValue).toBeLessThan(initialValue);
  });

});
