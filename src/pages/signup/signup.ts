import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';
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
    this.afAuth.auth
        .createUserWithEmailAndPassword(this.data.email, this.data.password)
        .then(firebaseUser => {
          console.log(firebaseUser);
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
