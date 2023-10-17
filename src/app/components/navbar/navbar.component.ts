import { Component, OnInit } from '@angular/core';
import { AsideActionService } from 'src/app/services/aside-action.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  valorParaAside: boolean = false;

  constructor(private dataService: AsideActionService) {}


  ngOnInit(){

    this.dataService.atualizarValor(false);
    console.log(this.dataService.valorCompartilhado.getValue());

  }

  alterarValor() {
    const novoValor = !this.dataService.valorCompartilhado.getValue();
    this.dataService.atualizarValor(novoValor);
  }

}
