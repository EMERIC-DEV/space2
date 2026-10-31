import { Routes } from '@angular/router';
import { NavBarre } from './component/nav-barre/nav-barre';
import { Acceuil } from './component/acceuil/acceuil';

export const routes: Routes = [
    {
        path:'dd',
        component:NavBarre
    },
    {
        path:'',
        component:Acceuil
    }
];
