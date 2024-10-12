import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  @Output()
  onDeleteId:EventEmitter<string>=new EventEmitter();
  
@Input()
public charactersList:Characters[]=[{
  name:"Trunk",
  power:10
}]
onDeleteCharacter(index:string):void{
  // emitir el id del personaje
  
this.onDeleteId.emit(index)

}
}
