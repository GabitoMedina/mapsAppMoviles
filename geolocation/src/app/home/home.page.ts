import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coordenadas: any={
    lat:0,
    long:0
  }
  latitude:0;
  longitude:0;
  

  constructor(
    private _geo:Geolocation
  ) {
    
  }
  geolocalizar(){
    console.log("cordenadas");

    this._geo.getCurrentPosition().then(resultado => {
      console.log(resultado);
      this.coordenadas.lat = resultado.coords.latitude;
      this.coordenadas.long = resultado.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
