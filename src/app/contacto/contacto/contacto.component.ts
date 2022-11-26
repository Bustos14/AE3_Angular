import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sobreNosotros from 'src/assets/db/sobreNosotros.json';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  listaContacto: any = sobreNosotros;
  constructor(private router: Router) { }

  verDetalles(id: number){
    this.router.navigate(['/detallesContacto', id])
  }
  ngOnInit() {
  }

}
