import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { CompartilhamentoDadosTesteComponent } from './components/compartilhamento-dados-teste/compartilhamento-dados-teste.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { DayScreenComponent } from './components/day-screen/day-screen.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ListasComponent } from './components/listas/listas.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    CompartilhamentoDadosTesteComponent,
    EventosComponent,
    DayScreenComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    PrimeiroComponenteComponent,
    ListasComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
