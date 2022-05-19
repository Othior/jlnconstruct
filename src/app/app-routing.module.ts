import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RealisationComponent } from './realisation/realisation.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path:'' , redirectTo:'accueil' , pathMatch:'full'},
  { path:'accueil' , component: AccueilComponent },
  { path:'realisation' , component: RealisationComponent },
  { path:'contact' , component: ContactComponent },
  { path:'**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
