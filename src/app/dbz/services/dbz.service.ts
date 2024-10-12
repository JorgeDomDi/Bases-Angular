import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/characters';
import { v4 as uuid}  from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters:Characters[]=[
    {id:uuid(),
      name:"Krillin",
      power:500
    },
    {id:uuid(),
      name:"Goku",
      power:10000
    
    },
    {id:uuid(),
      name:"Vegetta",
      power:7500
    }
  ];
  onNewChatacter(character:Characters) {
    console.log("MAIN PAGE");
    console.log(character)
    let char=character;
    char.id=uuid();
  this.characters.push(char)
    }
    onDeleteCharacter(index:string){
      console.log("Entro al eliminador");
      
      console.log({index});
      this.characters=this.characters.filter(char=>char.id!==index)
  
    }
}
