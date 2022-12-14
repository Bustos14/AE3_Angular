import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import database from 'src/assets/db/database.json';
@Component({
  selector: 'app-listajuegos',
  templateUrl: './listajuegos.component.html',
  styleUrls: ['./listajuegos.component.css']
})
export class ListajuegosComponent implements OnInit {

 

  Games: any = database;
  constructor(private router: Router) { }
  
  //Metodo para mostrar los detalles de los componentes. Necesario un ID que se obtiene
  //del propio elemento del html
  verDetalles(id: number){
    this.router.navigate(['/details', id])
  }
  ngOnInit() {
  }

}
