import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RoutesParamsComponent } from './routes-params/routes-params.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponenOneComponent } from './directives/component-one/component-one.component';
import { ComponentTwoComponent } from './directives/component-two/component-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    RoutesParamsComponent,
    FormsComponent,
    PipesComponent,
    ComponenOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
