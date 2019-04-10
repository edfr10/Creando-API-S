import { Component, OnInit } from '@angular/core';                               //  aqui importamos todo el servicio. pero como quedo en la misma careta no es necesario inportarlo //
import { HomeSolicitudService } from '../home-solicitud.service';     // los componentes tienen un ciclo. que antes de que cargue cualquier cosa me haga un metodo de unh init para que me cargue lo primero antes de que cargue cualquier otra cosa





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {                          //  en angular 4 se implemeta con oninhit y onfinishd // para implementar el oninit primeramente mas que nada
  
  paises : any [];                             //

   constructor(private servicioPaises: HomeSolicitudService) {          // aqui pondremos que queremos que nos carge de primero
   }
      ngOnInit() {               //para que me traiga la info antes que me cargue la pagina "me carga la parte grafica primero y por debajo toda la variable"
       
      this.servicioPaises.getPaises().subscribe( data =>{
                                                        this.paises = data, 
                                                        console.log(this.paises) 
                                                        });                                                      //  el subscribe esta pendiente de la comunicacion asicrono del servicio y actualizar los datos del servicio// cuando es un metodo colocar los ()

        
      }

   }

