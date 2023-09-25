import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'bases';
  public counter: number = 10;

increaseby( value: number):void{

this.counter += value;
}

reset(){

  this.counter = 10;
}

}
