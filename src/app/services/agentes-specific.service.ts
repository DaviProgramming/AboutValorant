import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentesSpecificService {
  constructor(private http: HttpClient) { }

  id : string = '';

  getAgenteInfo(id : string) {

    return this.http.get(`https://valorant-api.com/v1/agents/${id}`);
    
  }

}
