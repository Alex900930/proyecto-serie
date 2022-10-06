import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from './../../interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
   @Input() personaje!: Personaje;
  constructor() { }

  

}
