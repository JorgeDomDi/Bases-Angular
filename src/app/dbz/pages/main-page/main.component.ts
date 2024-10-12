import { Component, Input, Output } from '@angular/core';
import { DbzNavbarComponent } from '../../../dbz-navbar/dbz-navbar.component';
import { Characters } from '../../interfaces/characters';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


  constructor(private dbzService: DbzService) {
    // this.characters = this.dbzService.characters
  }
  get characters():Characters[]{
return [...this.dbzService.characters]
  }
public deleteChar($event:string){
  this.dbzService.onDeleteCharacter($event)
}
public newChar($event:Characters){
  this.dbzService.onNewChatacter($event)
}
}
