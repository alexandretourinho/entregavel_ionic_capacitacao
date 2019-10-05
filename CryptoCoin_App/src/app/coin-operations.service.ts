import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { FavoriteService, criptomoeda } from './favorite.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinOperationsService {
  public coin_inputs: any;
  public sigla: any;
  public str: string;
  public val: number;
  public index:number;
  constructor(public fav: FavoriteService, public alertCtrl: AlertController, public http: HttpClient) { 

  }
  async addcoin(){
    this.coin_inputs=[];
    Object.keys(this.fav.cripto_names).forEach(sigla=>{
        this.coin_inputs.push({name: sigla, type:'radio', label: this.fav.cripto_names[sigla], value: sigla});
    });
    let alert = await this.alertCtrl.create({
      header: 'Adicionar Criptomoeda',
      inputs: this.coin_inputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Ok',
          handler: (data:string) => {
            this.sigla = data;
            if (this.sigla != null){
              this.str = 'https://min-api.cryptocompare.com/data/price?fsym=' + this.sigla + '&tsyms=BRL&api_key=f1877d99ae9936b3ffd9e813b37dd81cf40eadcf4527f80ad57f8c6edbb1a9a2';
              
              if(this.fav.coins.some(coin=>{ this.index = this.fav.coins.indexOf(coin); return coin.nome == this.sigla;})) {
                this.http.get(this.str).subscribe((response) => {
                  Object.keys(response).forEach(coin => {
                   this.val = response['BRL'];})
                   this.fav.coins[this.index].valor = this.val;
                });
              }
              
              else {
                    this.http.get(this.str).subscribe((response) => {
                    Object.keys(response).forEach(coin=>{
                    this.fav.coins.push(new criptomoeda(this.sigla, response['BRL'], false));}) 
                    });
              }
           }
          }
        }
      ],
      backdropDismiss: true

    });

    await alert.present();

    
  }

  favorite(moeda){
    let index = this.fav.coins.indexOf(moeda);
    
    if (this.fav.coins[index].favorito){
      this.fav.coins[index].favorito = false;
      let index_fav = this.fav.fav_coins.indexOf(moeda);
      if (index >-1){
        this.fav.fav_coins.splice(index_fav,1);
      }
    }
    else{
      this.fav.coins[index].favorito = true;
      this.fav.fav_coins.push(moeda);
    }
    
  }

  deletecoin(moeda){
      let index = this.fav.coins.indexOf(moeda);
      let index_fav = this.fav.fav_coins.indexOf(moeda);
      if (index > -1){
        this.fav.coins.splice(index, 1);
      }
      if (index_fav > -1){
        this.fav.fav_coins.splice(index_fav, 1);
      }
  }

}
