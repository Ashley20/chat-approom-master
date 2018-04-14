import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import {SigninPage} from "../pages/signin/signin";

const config = {
  apiKey: 'AIzaSyDW-f4sDiqnDeC-kW2e1IwPtt7R5wok9NU',
  authDomain: 'ionic-3d4b2.firebaseapp.com',
  databaseURL: 'https://ionic-3d4b2.firebaseio.com',
  projectId: 'ionic-3d4b2',
  storageBucket: 'ionic-3d4b2.appspot.com',
  messagingSenderId: "79259007060"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  rootPage:any = SigninPage;
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
