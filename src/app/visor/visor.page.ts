import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.page.html',
  styleUrls: ['./visor.page.scss'],
})
export class VisorPage implements OnInit {

  constructor(private modalCtrl: ModalController ) {


  }

  close(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
