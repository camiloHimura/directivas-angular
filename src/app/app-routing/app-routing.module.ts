import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './../directives/directives.component';
import { RoutesParamsComponent } from './../routes-params/routes-params.component';
import { FormsComponent } from './../forms/forms.component';
import { PipesComponent } from './../pipes/pipes.component';
import { SanitizerComponent } from './../sanitizer/sanitizer.component';

import { ObservablesComponent } from './../observables/observables.component';
import { AnimationComponent } from './../animation/animation/animation.component';

import { ChildrenRoutingComponent } from './../routes-params/children-routing/children-routing.component';
import { ResolveRoutingComponent } from './../routes-params/resolve-routing/resolve-routing.component';
import { RouteResolveService } from './../services/route-resolve.service';
import { TestComponent } from './../test/test.component';
import { OnPushComponent } from './../detection-strategy/on-push/on-push.component';
import { DetectionStrategyComponent } from './../detection-strategy/detection-strategy.component';
import { ComponentsComponent } from './../components/components.component';
import { ComponentComponent } from './../components/component/component.component';
import { NgContendComponent } from './../components/ng-contend/ng-contend.component';
import { ContentChildComponent } from './../components/content-child/content-child.component';

const routes: Routes = [
  { path: '', redirectTo: '/directivas', pathMatch: 'full' },
  { path: 'directivas', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'rutas', component: RoutesParamsComponent,
    children: [{
                path: 'children/:id',
                component: ChildrenRoutingComponent
              },
              {
                path: 'resolve',
                resolve: { info: RouteResolveService },
                component: ResolveRoutingComponent
              }]
  },
  { path: 'formularios', component: FormsComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'animaciones', component: AnimationComponent },
  { path: 'sanitizer', component: SanitizerComponent },
  { path: 'test', component: TestComponent },
  { path: 'componentes', component: ComponentsComponent,
    children: [{
                path: '',
                component: ComponentComponent
              }, {
                path: 'eventsComponent',
                component: ComponentComponent
              }, {
                path: 'ngContent',
                component: NgContendComponent
              }, {
                path: 'contenChild',
                component: ContentChildComponent
              }]
  },
  { path: 'detectionStategy', component: DetectionStrategyComponent,
    children: [{
                path: '',
                component: OnPushComponent
              }, {
                path: 'OnPush',
                component: OnPushComponent
              }]
  },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  providers: [RouteResolveService],
  exports: [RouterModule]
})

export class AppRoutingModule { }
