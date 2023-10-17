import { Component } from '@angular/core';
import { CardsPlayersServiceService } from 'src/app/services/cards-players-service.service';

@Component({
  selector: 'app-cards-players-service',
  templateUrl: './cards-players-service.component.html',
  styleUrls: ['./cards-players-service.component.css']
})
export class CardsPlayersServiceComponent {

  
  cards:any;

  constructor(private cardsService: CardsPlayersServiceService){

  }

  ngOnInit(){

    this.cardsService.getCards().subscribe((Response : any) => {
      this.cards = Response.data;

      this.cards.filter((card:any) => card.largeArt != null && card.largeArt != '');

    })

  }

}
