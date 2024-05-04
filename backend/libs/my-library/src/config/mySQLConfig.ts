import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "../entites/client.entity";
import { Categorie } from "../entites/categorie.entity";
import { Produit } from "../entites/produit.entity";
import { Reclamation } from "../entites/reclamation.entity";
import { Vendeur } from "../entites/vendeur.entity";
import { Admin } from "../entites/admin.entity";
import { Commande } from "../entites/commande.entity";
import { Facture } from "../entites/facture.entity";
import { LigneCommande } from "../entites/ligne_commande.entity";
import { Evaluation } from "../entites/evaluation.entity";


export function mySQLConfig() {
    return TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nestjs',
        entities: [
            Admin, Categorie, Client, Commande, Facture, LigneCommande, Produit, Reclamation, Vendeur , Evaluation
        ],
        synchronize: true,
        autoLoadEntities: true,
    });


}

