import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public logo:string = "../../assets/icon/hamburger menu.svg";

  public liens:Array<ILien>=[ 
    {
      nom:"Accueil",
      lien:"/accueil"
    }, 
    {
      nom:"Réalisation",
      lien:"/realisation"
    },
    {
      nom:"Contact",
      lien:"/contact"
    }
  ]

  public menuBurger(menu):void {
    menu.setAttributeNode("active")
    console.log("menu => ", menu.getAttribute("active"))
    
  }
  
}

export interface ILien {
  nom:string;
  lien:string;
}