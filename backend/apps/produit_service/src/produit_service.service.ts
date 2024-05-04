import { Injectable } from '@nestjs/common';

@Injectable()
export class ProduitServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
