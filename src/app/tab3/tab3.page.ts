import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  geoposition = '';

  constructor(private alertCtrl: AlertController,
    private generalService: GeneralService) {}

  public async updateGPS() {
    const alertElement = await this.alertCtrl.create({
      header: '¿Actualizar GPS?',
      message: 'Se intentará encontrar la posición del lugar',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: () => {
            this.generalService.updateGPS();
            this.geoposition = this.generalService.lat + ' ' + this.generalService.long;
          }
        }
      ]
    });
    await alertElement.present();
  }

}
