import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page/main.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { DbzNavbarComponent } from '../dbz-navbar/dbz-navbar.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    MainComponent,
    ListadoComponent,
    AddCharacterComponent,
    DbzNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainComponent]
})
export class DbzModule { }
