import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecetasPage} from "../recetas/recetas";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController) {
  }
  getPage(){
    this.navCtrl.push(RecetasPage);
  }
}
