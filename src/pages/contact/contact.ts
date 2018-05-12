import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { Contact } from '../../models/Contact';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contacts = [];
  ref = firebase.database().ref('contacts/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', contacts => {
      this.contacts = [];
      this.contacts = snapshotToArray(contacts);
    });
  }

  ionViewDidLoad() {}

  openChat(key, buddy) {
    this.navCtrl.setRoot(HomePage, {
      key: key,
      buddy: buddy
    });
  }

}



export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
