import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomPage } from  '../room/room';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  data = { 
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {}

  ionViewDidLoad() {}
  signIn() {
    this.afAuth.auth
        .signInWithEmailAndPassword(this.data.email, this.data.password)
        .then(user => {
          console .log(user);
          this.navCtrl.setRoot(RoomPage, {
            nickname: user.displayName
          });
        })
  }
}
