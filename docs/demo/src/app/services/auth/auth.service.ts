import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuth } from "angularfire2/auth";
import  * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider).then(success => {
        resolve(success);
      }, err => {
        reject(err);
      });
    });
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut().then(success => {
        resolve(success);
      }, err => {
        reject(err);
      });
    });
  }

  getAuthState(): Observable<any> {
    return this.afAuth.authState;
  }
}
