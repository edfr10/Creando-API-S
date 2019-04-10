import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeSolicitudService {

  constructor(private http : HttpClient ) { }

  private httpUrl = 'https://restcountries.eu/rest/v2/all'; 


  getPaises(): Observable <any[]> {                                          // este metodo va a recibir un objeto de tipo array 
    
    return this.http.get<any[]> (this.httpUrl);                           //  una funcion donde me retonra un objeto tipo json, lo cual me devuelve, todo la data del url en formato json 
                                                                          
  } 
}