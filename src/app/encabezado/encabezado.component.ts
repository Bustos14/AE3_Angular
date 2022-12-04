import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import database from 'src/assets/db/database.json';
import { LoginComponent } from '../login/login/login.component';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent{

@ViewChild(LoginComponent) login: any;  
constructor(private router: Router) { 
   
  }

  Games: any = database;
 
  goHome(){
    this.router.navigate(['/listajuegos'])
  }
  

  //Metodo para ir ir a los detalles de los juegos. Se obtiene el ID del juego al seleccionarlo
  goJueguitos(id: number){
    this.router.navigate(['/details', id])

  }
}
