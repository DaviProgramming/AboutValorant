import { Component } from '@angular/core';
import { ActualPageService } from 'src/app/services/actual-page.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  
  page: any = '';

  constructor(private actualPage: ActualPageService){

  }

  ngOnInit() {

    this.getDadosComportilhados();

  }


  getDadosComportilhados(){

    this.page = this.actualPage.dadosCompartilhados;

  }

}
