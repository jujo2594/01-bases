import { Routes } from '@angular/router';
import  ContadorComponent  from './Contador/contador.component';


export const routes: Routes = [
    {path: 'contador', 
    component: ContadorComponent
},
{
    path:'',
    redirectTo: 'contador',
    pathMatch: 'full'
}
];
