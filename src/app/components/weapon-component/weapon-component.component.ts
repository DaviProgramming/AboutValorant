import { Component, OnInit } from '@angular/core';
import { WeaponServiceService } from 'src/app/services/weapon-service.service';
import { CustomActionsService } from 'src/app/scripts/custom-actions.service';


@Component({
  selector: 'app-weapon-component',
  templateUrl: './weapon-component.component.html',
  styleUrls: ['./weapon-component.component.css']
})
export class WeaponComponentComponent {

  

  constructor(private weaponService: WeaponServiceService, private customActionsService: CustomActionsService){

  }

  armas: any = [];


  divAtiva: string = ''; 

  showDiv(uuid: string): void {
    if (this.divAtiva === uuid) {
      this.divAtiva = ''; 
    } else {
      this.divAtiva = uuid; 
    }
    
  }


  getArmas(){

    this.weaponService.getArmas().subscribe((response:any) => {

      this.armas = response.data;


    })

  }

  executeCustomAction(event:MouseEvent): void {
    // Chame o método do serviço
    this.customActionsService.clickButton(event.currentTarget);
    
  }

  ngOnInit() {

    this.getArmas();


  }

  


 

}
