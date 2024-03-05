import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html',

})

export class PersonajesComponent {

  get personajes(){
    return this.DbzService.personajes;
  }

  constructor ( private DbzService: DbzService){}
  
}
