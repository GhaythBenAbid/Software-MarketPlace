import { ApplicationConfig, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { StoreComponent } from './Pages/store/store.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GraphQLModule } from './graphql.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { VendeurComponent } from './Pages/vendeur/vendeur.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AjouterProduitComponent } from './Pages/ajouter-produit/ajouter-produit.component';
import { CloudinaryModule } from '@cloudinary/ng';
import { ModiferProfileComponent } from './Pages/modifer-profile/modifer-profile.component';
import { AjouterUserComponent } from './Pages/ajouter-user/ajouter-user.component';
import { ProduitDetailsComponent } from './Pages/produit-details/produit-details.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { ReviewComponent } from './Pages/review/review.component';
import { StarRatingModule } from 'angular-star-rating';
import { PanierComponent } from './Pages/panier/panier.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { CommandesComponent } from './Pages/commandes/commandes.component';
import { FactureComponent } from './Pages/facture/facture.component';




@NgModule({
  
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    StoreComponent,
    NavbarComponent,
    VendeurComponent,
    AdminComponent,
    SidebarComponent,
    AjouterProduitComponent,
    ModiferProfileComponent,
    AjouterUserComponent,
    ProduitDetailsComponent,
    LogoutComponent,
    ReviewComponent,
    PanierComponent,
    CommandesComponent,
    FactureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule,
    NgToastModule,
    CloudinaryModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
