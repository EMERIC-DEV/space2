import { Component } from '@angular/core';
import { NavBarre } from '../nav-barre/nav-barre';
import { Footer } from '../footer/footer';

@Component({
  imports: [NavBarre,Footer],
  selector: 'app-acceuil',
  styleUrl: './acceuil.css',
  templateUrl: './acceuil.html',
})
export class Acceuil {}
