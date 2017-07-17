import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RoutesParamsComponent } from './routes-params/routes-params.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponenOneComponent } from './directives/component-one/component-one.component';
import { ComponentTwoComponent } from './directives/component-two/component-two.component';
import { ObservablesComponent } from './observables/observables.component';
import { ChildrenRoutingComponent } from './routes-params/children-routing/children-routing.component';
import { ResolveRoutingComponent } from './routes-params/resolve-routing/resolve-routing.component';

import { ObservablesService } from './services/observables.service';
import { DaLoaderModule } from './da-loader/da-loader.module';
import { AnimationComponent } from './animation/animation/animation.component';
import { SanitizerComponent } from './sanitizer/sanitizer.component';
import { SanitizerPipe } from './pipes/sanitizer.pipe';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    RoutesParamsComponent,
    FormsComponent,
    PipesComponent,
    ComponenOneComponent,
    ComponentTwoComponent,
    ObservablesComponent,
    ChildrenRoutingComponent,
    ResolveRoutingComponent,
    AnimationComponent,
    SanitizerComponent,
    SanitizerPipe,
    TestComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    DaLoaderModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ObservablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
