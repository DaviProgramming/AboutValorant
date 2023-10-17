import { Component, Input } from '@angular/core';
import { ActualPageService } from 'src/app/services/actual-page.service';
import { AsideActionService } from 'src/app/services/aside-action.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent {

  
  page: any = '';
  responsive: any;
  active:any;

  constructor(private actualPage: ActualPageService, private asideAction : AsideActionService, private dataService: AsideActionService){

  }


  ngOnInit() {

    this.getDadosComportilhados();

    this.dataService.valorCompartilhado$.subscribe((valor: any) => {
      this.active = valor;
      console.log(this.active);
    });

  }


  getDadosComportilhados(){

    this.page = this.actualPage.dadosCompartilhados;

  }

  getAsideActionService(){


  }

}
