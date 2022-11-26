import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'AE-3Angular';
  constructor(private router: Router){

  }
  public situado(){
    if(this.router.url !== "/"){
      return true;
    }
    return false;
  }
}
