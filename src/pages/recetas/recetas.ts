import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-recetas',
  templateUrl: 'recetas.html',
})
export class RecetasPage {
  recetas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMessages();
  }

  getMessages() {
    //hacemos referencia al branch de la db de firebase llamado mensajes
    var messageRef = firebase.database().ref().child("/0/MEJOR_RECETA");
    messageRef.on("value", (snap) => {
      var data = snap.val();
      this.recetas = data;
      console.log(this.recetas);
    })
  }
}
