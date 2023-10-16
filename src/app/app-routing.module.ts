import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './pages/agentes/agentes.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MapasComponent } from './pages/mapas/mapas.component';

const routes: Routes = [
  { path: "agentes/:id", component: AgentesComponent },
  {path: "",  pathMatch: 'full', component: HomeComponent },
  {path: "mapas", component: MapasComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
