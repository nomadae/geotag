import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  lat: string;
  long: string;
  constructor(private geolocation: Geolocation) { }

  public updateGPS(): void {
    this.geolocation.getCurrentPosition().then((res) => {
      this.lat = res.coords.latitude + '';
      this.long = res.coords.longitude + '';
    }).catch((error) => {
      console.log('Error getting geolocation', error);
    });
  }
}
