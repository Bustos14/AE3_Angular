import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import database from 'src/assets/db/database.json';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private router: Router) { }

  Games: any = database;
  goHome(){
    this.router.navigate(['/listajuegos'])
  }
  ngOnInit() {
  }

  goJueguitos(id: number){
    let currentUrl = this.router.url;
    if(!currentUrl.includes('/details/')){
      this.router.navigate(['/details', id])
    }else{
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    }
   
 
  }
}
