import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
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

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      returnArr.push(item);
  });

  return returnArr;
};
