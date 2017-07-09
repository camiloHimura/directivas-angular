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

const routes: Routes = [
  { path: '', redirectTo: '/directivas', pathMatch: 'full' },
  { path: 'directivas', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'formularios', component: FormsComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'animaciones', component: AnimationComponent },
  { path: 'sanitizer', component: SanitizerComponent },
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
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  providers: [RouteResolveService],
  exports: [RouterModule]
})

export class AppRoutingModule { }
