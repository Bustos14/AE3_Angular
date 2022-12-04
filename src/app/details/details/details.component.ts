import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import database from 'src/assets/db/database.json';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Games: any = database;
  id: number = 0;
  title: string = '';
  rating: number = 0;
  company: string = '';
  detail: string = '';
  img: string = '';
  constructor(route : ActivatedRoute, private router: Router) { 
    this.id = route.snapshot.params['id'];
    this.inforJuego(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    
    
  }

  //Metodo para volver a la pantalla anterior(Listado de juegos)
  public backHome(){
    this.router.navigate(['/listajuegos'])
  }

  //Metodo para obtener la información del juego
  public inforJuego( id: number){
   for (const g of this.Games) {
    if(id == g.id){
      this.title = g.title;
      this.rating = g.rating;
      this.company = g.company;
      this.detail = g.detail;
      this.img = g.cover;
    }

    
   }
  }

}
