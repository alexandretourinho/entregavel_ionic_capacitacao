import { CoinOperationsService } from './../coin-operations.service';
import { FavoriteService} from './../favorite.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AlertController } from '@ionic/angular';
  
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  
  constructor(private http: HttpClient, public fav: FavoriteService, public alertCtrl: AlertController,
    public coinops: CoinOperationsService) {
}
  favorite(moeda){
    this.coinops.favorite(moeda);
  }
  
  
  addmoeda(){
   this.coinops.addcoin();
  }

  deletemoeda(moeda){
    this.coinops.deletecoin(moeda);
  }
}
