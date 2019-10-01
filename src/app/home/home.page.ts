import { Component } from '@angular/core';
import { VisorPage } from '../visor/visor.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {

    this.presentModal();
  }


   async presentModal() {
    const modal = await this.modalController.create({
      component: VisorPage
    });
    return await modal.present();
  }

}
