import { Component, OnInit } from '@angular/core';
import { AgentesService } from 'src/app/services/agentes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
    // Código a ser executado quando a página é carregada
    this.getData();
  }

  exibir: string = 'agentes';
  agentesData: any = [];

  constructor(private AgentesService: AgentesService){

  }

  getData(){

    if(this.exibir == 'agentes'){



      this.AgentesService.getAgentes().subscribe((response : any) => {

        let data = response;

        this.agentesData = response.data;

        console.log('dados:', this.agentesData);

      })

    }

  }


}
