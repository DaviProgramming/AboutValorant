import { Component } from '@angular/core';
import { TemporadasServicesService } from 'src/app/services/temporadas-services.service';

@Component({
  selector: 'app-temporadas-component',
  templateUrl: './temporadas-component.component.html',
  styleUrls: ['./temporadas-component.component.css']
})



export class TemporadasComponentComponent {

  


  constructor(private temporadasService: TemporadasServicesService){

  }

  temporadas: any;

  getTemporadas(){
    
    this.temporadasService.getTemporadas().subscribe((Response:any) => {
      this.temporadas = Response.data;

      console.log(this.temporadas); 
    })

  }

  ngOnInit(){
    this.getTemporadas();
  }

}
