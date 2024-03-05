import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-contador',
    imports: [CommonModule],
    template: 
    `
    <h1> {{ title }} </h1>
    <h3>La base es: <strong> 5 </strong></h3>
    <button (click)="acumular( base )"> {{base}} </button>
    <span>{{numero}}</span>
    <button (click)="acumular( -base )"> -{{base}} </button>
    ` 
 })

export default class ContadorComponent {

    public title : string = 'Contador App';
    numero : number = 10;
    base : number = 5

    acumular( valor : number){
        this.numero += valor;
    }
}