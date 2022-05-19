import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public services:Array<IimageContenu>  = [
    {
       image : "/assets/amenagement_exterieur1.jpg" ,
       contenu : "Aménagement Extérieur" 
    },
    {
        image : "/assets/construction.jpg" ,
       contenu : "Construction"
    },
    {
        image : "/assets/renovation.jpg" ,
       contenu : "Rénovation"
    }
]

}
export interface IimageContenu{
  image:string;
  contenu:string;
}
