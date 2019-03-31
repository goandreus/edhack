import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import * as firebase from "firebase";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  desayunos : any = [];
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.getMessages();
  }
  getMessages(){
    //hacemos referencia al branch de la db de firebase llamado mensajes
    var messageRef=firebase.database().ref().child("/0/ALIMENTOS");
    messageRef.on("value",(snap) => {
      var data =snap.val();
      this.desayunos = data;
      console.log(this.desayunos);
    })
  }
}
