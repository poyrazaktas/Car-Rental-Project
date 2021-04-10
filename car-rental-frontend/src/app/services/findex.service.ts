import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindexService {
  customerFindexScore: number;

  constructor() {
  }

  getFindexScore(): number {
    return this.getRandomInt(1901);
  }

  getFindexScoreForCustomer(): number {
    return this.getRandomInt(1401) + 500;
  }

  private getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }
}
