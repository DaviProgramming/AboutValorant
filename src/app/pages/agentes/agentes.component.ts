import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AgentesSpecificService } from 'src/app/services/agentes-specific.service';


@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent {

  constructor(private route: ActivatedRoute, private AgentesSpecificService: AgentesSpecificService) {
    // Você pode acessar os parâmetros da URL aqui.
  }


 

}
