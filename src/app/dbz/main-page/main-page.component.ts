import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from '../personajes/personajes.component';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  //'FormsModudle' Modulo de angular para manejar Formularios
  imports: [CommonModule,
            FormsModule, 
            PersonajesComponent, 
            AgregarComponent,
          ],
  providers : [DbzService],
  templateUrl: './main-page.component.html',
})


export class MainPageComponent {

  nuevo : Personaje ={
    nombre: 'Maestro Roshi',
    poder: 1200
  }

  constructor( private dbzService : DbzService){}

}
