import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  listaUsuarios : Usuario[] = [] ;
  usuario: Usuario | null = null;

  @Input() mensaje: string;
  nombre : string = ""
  //Habilitar mensaje de error, el nombre y password no deben
  //estar vacios
  usuarioObligatorio = true;
  passwordObligatoria = true;
  usuarioCorrecto = true;

  password : string = ""
  constructor(private router: Router) { 
    let usuario: Usuario= new Usuario ("Alvaro", "alvaro123");
    this.listaUsuarios.push(usuario);
    usuario = new Usuario("admin", "root")
    this.listaUsuarios.push(usuario);
  }
 
  public enviar(){
    if(!this.errorFormulario()){
      this.router.navigate(['/listajuegos'])
    }
  }
  public errorFormulario() : boolean{
    let error : boolean = false;
    let nombreActual = this.nombre;
    let passwordActual = this.password;
    this.mensajesDeError();
    if(nombreActual?.trim().length==0){
      this.usuarioObligatorio = false; //se muestra el mensaje
      error = true;
    }
    if(passwordActual?.trim().length==0){
      this.passwordObligatoria = false; //se muestra el mensaje
      error = true;
    }
    let comprobadorUsuario = this.usuarioExiste(this.nombre, this.password);

    if(!comprobadorUsuario && this.usuarioObligatorio && this.passwordObligatoria){
			this.usuarioCorrecto= false;
      error = true;
    }
    return error;
  }
/**
 *  Metodo que controla los mensajes de error en el login
 */
  public mensajesDeError(){
    this.usuarioObligatorio = true
    this.passwordObligatoria = true
		this.usuarioCorrecto = true;
  } 
  
  
/**
 * Comprueba si el usuario existe en el listado de usuarios. Funciona pasandole nombre y contraseña
 * por parametro. Se obtienen del usuario.
 */

  public usuarioExiste(nombre: String, password: String): boolean{
		let comprobante : boolean = false;
		this.listaUsuarios.forEach(element => {
			console.log(element.nombre);
			console.log(nombre);
			if(element.nombre == nombre && element.password == password){
				comprobante = true;
			}
		});
		return comprobante;
  }
  ngOnInit() {
  }

}
