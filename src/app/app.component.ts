import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ingresoPage} from "../pages/ingreso/ingreso";
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBcvk7nNo-W9e6gr3OyHiBM8VZgjLqX4CM",
  authDomain: "allifood-27109.firebaseapp.com",
  databaseURL: "https://allifood-27109.firebaseio.com",
  projectId: "allifood-27109",
  storageBucket: "allifood-27109.appspot.com",
  messagingSenderId: "717868692324"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ingresoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
