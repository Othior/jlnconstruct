import { Component, OnInit } from '@angular/core';
import { Services } from '../Modal/interface_services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   public amenagement: Services = {
    titre_principal: "Aménagement Extérieur",
    premier_contenu: { 
      titre: "DE LA TERRASSE À LA PISCINE" , 
      paragraphe: "Vous souhaitez aménager votre espace vert ainsi que les abords de votre bâtiment ? Vous cherchez un professionnel pour réaliser le chantier que ce soit pour une terrasse ou une piscine à Couthuin, Huy et aux alentours ? Faites appel à mon entreprise afin de bénéficier de mon savoir-faire et de mon expertise en la matière !" , 
      image: ""
  },
    second_contenu: { titre: "UN PROFESSIONNEL POUR VOTRE TERRAIN" , image: "", 
    paragraphe_un: "Que ce soit dans le cadre d’une rénovation de maison ou d’une construction de gros œuvre, je suis en mesure d’aménager le reste de votre terrain. N’hésitez pas à me faire part de vos envies ! Mes services comprennent toutes les prestations suivantes :" , 
    paragraphe_deux: "le terrassement : la création d entrée de garage, de pourtour de maison, d allée de jardin, de parking et de terrasse : pavage et dallage dont pose de Klinkers ou pierre ; la réalisation de piscine : pose de blocs et préparation de la structure." , 
    paragraphe_trois: "De plus, je vous propose des solutions sur mesure pour vos différents travaux d’isolation de façade."
  },
    troisieme_contenu: { 
      titre: "JE SUIS À L’ÉCOUTE DE VOS PROJETS" , 
      image: "", 
      paragraphe: "Contactez-moi sans hésiter par téléphone ou par mail pour obtenir plus d’informations à propos de mes services. Basé à Couthuin, non loin de Huy, je réponds à vos demandes à travers une vaste région, qui comprend Namur, Liège, Bruxelles, Wavre et le reste du Brabant wallon."
     }
   }
   public renovation: Services = {
    titre_principal: "Rénovation",
    premier_contenu: { 
      titre: "MES SERVICES DE RÉNOVATION DE MAISON" , 
      paragraphe: "Mon entreprise vous propose son savoir-faire pour vos projets de rénovation de maison à Couthuin, Huy ou aux alentours. Faites-moi part de vos envies et de vos besoins afin que je puisse élaborer une solution personnalisée. Quel que soit votre projet, je vous garantis un travail impeccable, réalisé avec des matériaux solides et durables." , 
      image: ""
    },
    second_contenu: { 
    titre: "VOTRE CHANTIER ASSURÉ DE A À Z PAR UN SPÉCIALISTE" , image: "", 
    paragraphe_un: "Que ce soit pour une transformation ou une rénovation de maison, vous pouvez me solliciter. Je suis, en effet, en mesure d’assurer votre chantier. Mes services comprennent entre autres" , 
    paragraphe_deux: "l’agrandissement de maison : création d’annexe ou encore de garage avec la réalisation du gros œuvre couvert ;la modification de la structure : ouverture de murs porteurs pour une porte, une fenêtre ou une baie ;" , 
    paragraphe_trois: "la fortification, la modification ou la rénovation de la maçonnerie ; la pose de chape ou de carrelage ; les aménagements extérieurs dont la piscine."
  },
    troisieme_contenu: { 
      titre: "VOUS AVEZ DES QUESTIONS ?" , image: "", 
    paragraphe: "N’hésitez pas à me contacter par téléphone ou par mail pour obtenir de plus amples informations à propos de mes activités. Je vous remets un devis gratuit sur la base de l’étude de votre projet. Basé à Couthuin, non loin de Huy, je me déplace partout aux alentours, à Namur, Liège, Wavre, Bruxelles ou encore dans le reste du Brabant wallon." 
  }
   } 
   public construction: Services ={
    titre_principal: "Construction",
    premier_contenu: { 
      titre: "UN ENTREPRENEUR POUR VOTRE GROS ŒUVRE" , 
      paragraphe: "Vous êtes à la recherche d’un entrepreneur pour la prise en charge de votre chantier de gros œuvre à Couthuin, Huy ou aux alentours ? Vous souhaitez bénéficier de solutions adaptées à vos attentes ? Mon entreprise se tient à votre entière disposition pour assurer l’ensemble des travaux de votre projet de bâtir." , 
      image: ""
    },
    second_contenu: { 
      titre: "UN PROFESSIONNEL POUR RÉALISER VOTRE CHANTIER" , 
      image: "", 
      paragraphe_un: "Vous pouvez me confier en toute confiance votre chantier de construction. Je suis, en effet, en mesure de réaliser votre maison, votre garage, votre annexe ou encore votre abri de jardin. Mes prestations comprennent " , 
      paragraphe_deux: "les travaux de démolition : à l’extérieur et à l’intérieur ;la création du gros œuvre couvert ;la maçonnerie ;les aménagements extérieurs : de la terrasse à la piscine" , 
      paragraphe_trois: "Quelle que soit votre demande, je vous garantis un travail impeccable, réalisé dans le respect du budget et des délais préfixés. Autant mes matériaux que mes services sont de première qualité."
    }
      ,
    troisieme_contenu: { 
      titre: "VOUS SOUHAITEZ EN SAVOIR PLUS ?" , 
      image: "", 
      paragraphe: "Contactez-moi sans plus attendre par téléphone ou par mail pour poser vos questions sur mes différentes activités. Je vous remets sur demande un devis de mes prestations après l’étude de votre demande. Étant basé à Couthuin, je me déplace partout aux alentours, notamment à Huy, Namur, Liège, Wavre, Bruxelles et à travers le Brabant wallon." 
  }
   }
}

export interface carousel_service {
  image_une:string,
  image_deux:string,
  image_trois:string,
  image_quatre:string
}
