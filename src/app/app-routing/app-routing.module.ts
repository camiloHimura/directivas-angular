import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './../directives/directives.component';
import { RoutesParamsComponent } from './../routes-params/routes-params.component';
import { FormsComponent } from './../forms/forms.component';
import { PipesComponent } from './../pipes/pipes.component';
import { ObservablesComponent } from './../observables/observables.component';

const routes: Routes = [  
  { path: '', redirectTo: '/directivas', pathMatch: 'full' },
  { path: 'directivas', component: DirectivesComponent },
  { path: 'parametros/:id', component: RoutesParamsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'formularios', component: FormsComponent },
  { path: 'observables', component: ObservablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
