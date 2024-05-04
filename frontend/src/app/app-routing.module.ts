import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { StoreComponent } from './Pages/store/store.component';
import { VendeurComponent } from './Pages/vendeur/vendeur.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { AjouterProduitComponent } from './Pages/ajouter-produit/ajouter-produit.component';
import { ModiferProfileComponent } from './Pages/modifer-profile/modifer-profile.component';
import { AjouterUserComponent } from './Pages/ajouter-user/ajouter-user.component';
import { ProduitDetailsComponent } from './Pages/produit-details/produit-details.component';
import { ReviewComponent } from './Pages/review/review.component';
import { PanierComponent } from './Pages/panier/panier.component';
import { CommandesComponent } from './Pages/commandes/commandes.component';
import { FactureComponent } from './Pages/facture/facture.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '' , component: LandingPageComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'store' , component: StoreComponent , canActivate: [AuthGuard] },
  { path: 'vendeur' , component: VendeurComponent , canActivate: [AuthGuard] },
  { path: 'profile' , component: ModiferProfileComponent , canActivate: [AuthGuard] },
  { path: 'vendeur/produit/add' , component: AjouterProduitComponent ,canActivate: [AuthGuard] },
  { path: 'admin/user/add' , component: AjouterUserComponent , canActivate: [AuthGuard] },
  { path: 'admin' , component: AdminComponent , canActivate: [AuthGuard] },
  { path: 'produit/:id' , component: ProduitDetailsComponent ,canActivate: [AuthGuard] },
  { path: 'produit/:id/review' , component: ReviewComponent , canActivate: [AuthGuard] },
  { path: 'panier' , component: PanierComponent , canActivate: [AuthGuard] },
  { path: 'commandes' , component: CommandesComponent , canActivate: [AuthGuard] },
  { path: 'facture/:id' , component: FactureComponent , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
