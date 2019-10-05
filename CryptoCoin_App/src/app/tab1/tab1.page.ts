import { CoinOperationsService } from './../coin-operations.service';
import { FavoriteService } from './../favorite.service';
import { criptomoeda } from '../favorite.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public fav: FavoriteService, coinops: CoinOperationsService) {
    
  }
  
}
