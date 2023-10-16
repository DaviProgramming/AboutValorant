import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AgentesComponent } from './pages/agentes/agentes.component';
import { HomeComponent } from './pages/home/home.component';
import { AgenteSpecificComponent } from './components/agente-specific/agente-specific.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    MainComponent,
    AgentesComponent,
    HomeComponent,
    AgenteSpecificComponent,
    MapasComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
