import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import sobreNosotros from 'src/assets/db/sobreNosotros.json';
@Component({
  selector: 'app-detallesContacto',
  templateUrl: './detallesContacto.component.html',
  styleUrls: ['./detallesContacto.component.css']
})
export class DetallesContactoComponent implements OnInit {
  listaContacto: any = sobreNosotros;
  constructor( route: ActivatedRoute, private router: Router) {
    this.id = route.snapshot.params['id'];
    this.infoContacto(this.id);
   }

   //Atributos del videojuego
  id: number = 0;
  name: string = '';
  email: string='';
  ocupacion: string = '';
  img: string = '';
  sobreNosotros: string = '';
  ngOnInit() {
  }

  /**
   * 
   * Metodo para obtener la información de contacto del listado de contactos. 
   */
  public infoContacto( id: number){
    for (const g of this.listaContacto) {
     if(id == g.id){
       this.name = g.name;
       this.email = g.email;
       this.ocupacion = g.ocupacion;
       this.sobreNosotros = g.sobreNosotros;
       this.img = g.img;
     }
    }
   }
   //Botón para volver atrás
   backHome(){
    this.router.navigate(['/contacto'])
   }
}
