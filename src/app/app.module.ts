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
import { ComponentComponent } from './components/component/component.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { OnPushComponent } from './detection-strategy/on-push/on-push.component';
import { DetectionStrategyComponent } from './detection-strategy/detection-strategy.component';
import { ComponentsComponent } from './components/components.component';
import { NgContendComponent } from './components/ng-contend/ng-contend.component';
import { ViewComponent } from './components/view/view.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { ShowViewComponent } from './components/show-view/show-view.component';
import { GeneralComponent } from './observables/general/general.component';
import { OperatorsComponent } from './observables/operators/operators.component';

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
    TestComponent,
    ComponentComponent,
    InputComponent,
    OutputComponent,
    OnPushComponent,
    DetectionStrategyComponent,
    ComponentsComponent,
    NgContendComponent,
    ViewComponent,
    ContentChildComponent,
    ShowViewComponent,
    GeneralComponent,
    OperatorsComponent
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
