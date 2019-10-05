import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public coins=[];
  public fav_coins=[];
  public cripto_names={'BTC': 'Bitcoin', 'DCR':'Decred', 'DOGE':'Dogecoin', 'ETH':'Ethereum', 'FCT': 'Factom', 'FTC':'Feathercoin', 'GDC':'GrandCoin', 'NLG':'Gulden', 'IFC':'Infinitecoin', 'LTC': 'Litecoin', 'MAID': 'MaidSafeCoin', 'XMR':'Monero', 'NEOS':'NeosCoin', 'NVC':'Novacoin', 'NEU':'NeuCoin', 'XPM': 'Primecoin', 'XRP':'Ripple', 'SAR':'Sarcoin', 'OPAL': 'Opalcoin', 'USDT': 'Tether', 'XVG':'Verge'};
  public cripto_icons=[];
  public str:string;
  public svg = '<svg xmlns="http://www.w3.org/2000/svg" width="226.777" height="226.777" viewBox="0 0 226.777 226.777"><path d="M135.715 122.244c-2.614-1.31-8.437-3.074-15.368-3.533-6.934-.458-15.828 0-15.828 0v30.02s9.287.198 15.503-.26c6.21-.458 12.621-2.027 15.826-3.795 3.203-1.766 7.063-4.513 7.063-11.379 0-6.869-4.579-9.745-7.196-11.053zm-19.555-17.465c5.104-.197 10.532-1.373 14.453-3.532 3.925-2.158 6.148-5.557 6.02-10.66-.134-5.102-3.532-9.418-9.287-11.186-5.757-1.766-9.613-1.897-13.998-1.962-4.382-.064-8.83.328-8.83.328v27.012c.001 0 6.541.197 11.642 0z"/><path d="M113.413 0C50.777 0 0 50.776 0 113.413c0 62.636 50.777 113.413 113.413 113.413s113.411-50.777 113.411-113.413C226.824 50.776 176.049 0 113.413 0zm46.178 156.777c-8.44 5.887-17.465 6.935-21.455 7.456-1.969.259-5.342.532-8.959.744v22.738h-13.998v-22.37h-10.66v22.37H90.522v-22.37H62.987l2.877-16.812h8.371c2.814 0 3.989-.261 5.166-1.372 1.177-1.113 1.439-2.812 1.439-4.188V85.057c0-3.628-.295-4.61-1.963-6.473-1.668-1.867-5.591-2.112-7.8-2.112h-8.091V61.939h27.535V39.505h13.996v22.434h10.66V39.505h13.998v22.703c10.435.647 18.203 2.635 24.983 7.645 8.766 6.475 8.306 17.724 8.11 20.406-.195 2.682-1.372 7.85-3.729 11.183-2.352 3.337-8.108 6.673-8.108 6.673s6.801 1.438 11.578 5.036c4.771 3.598 8.307 9.941 8.106 19.229-.192 9.288-2.088 18.511-10.524 24.397z"/></svg>';
  





  constructor(public http: HttpClient) { this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,ETH,DOGE,XMR&tsyms=BRL&api_key=f1877d99ae9936b3ffd9e813b37dd81cf40eadcf4527f80ad57f8c6edbb1a9a2').subscribe((Response) => {
    Object.keys(Response).forEach(coin=>{
      this.coins.push(new criptomoeda(coin, Response[coin].BRL, false));}) 
    });
    Object.keys(this.cripto_names).forEach(sigla => {
      this.cripto_icons[sigla] = '<img src="' + '../../assets/icons/' + sigla + '.png">';
    });
    
} 

}


export class criptomoeda {
  constructor(public nome: string, public valor: number, public favorito: boolean){

  }
}