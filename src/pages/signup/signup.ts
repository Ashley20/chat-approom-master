import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';
import * as firebase from 'firebase';
import { Contact } from '../../models/Contact';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  contactsRef = firebase.database().ref('contacts/');

  data = { 
    displayName: '',
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {}

  signUp() {
    // Create a new contact and insert it into database.
    const newContact = new Contact(this.data.displayName, this.data.email);

    this.afAuth.auth
        .createUserWithEmailAndPassword(this.data.email, this.data.password)
        .then(firebaseUser => { 
          this.contactsRef.push(newContact);
          
          firebaseUser.updateProfile({
            displayName: this.data.displayName
          });

          this.navCtrl.setRoot(SigninPage)
        })
        .catch(err => {
          console.log(err);
        });
  }

}
