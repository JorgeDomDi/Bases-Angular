import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroesNames:string[]=["Spiderman","Ironman","Hulk","Thor"]
public heroeBorrado:string|undefined;

borrarUltimo() {
  this.heroeBorrado=this.heroesNames.pop()
  }
}
