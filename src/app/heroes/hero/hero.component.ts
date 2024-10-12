import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
reset() {
  this.nombre="Ironman";
  this.edad=45;
}
public nombre:string="Ironman";
public edad:number=45;

get capitalize():string{
  return this.nombre.toUpperCase()
}
cambiarNombre(){
  this.nombre="Peter Parker";
 
}
cambiarEdad(){
  this.edad=26;
  console.log(this.edad);
  
 
}
getHeroDescription():string {
  return this.nombre+" "+this.edad
}

}
