import { Client } from '@app/my-library/entites/client.entity';
import { Commande } from '@app/my-library/entites/commande.entity';
import { Facture } from '@app/my-library/entites/facture.entity';
import { LigneCommande } from '@app/my-library/entites/ligne_commande.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommandeInput } from './commandes/dto/create-commande.input';

@Injectable()
export class CommandeServiceService {
  

  
}
