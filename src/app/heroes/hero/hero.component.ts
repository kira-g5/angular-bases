import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Gon';
  public age: number = 39

  get capitalizedName(): string {

//return 'hola gonza'
return this.name.toUpperCase();
  }

// hola soy un cambio probando git


}
