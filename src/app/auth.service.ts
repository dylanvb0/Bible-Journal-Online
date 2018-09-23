import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { EntryService } from './entry.service';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails : firebase.User = null;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private entryService : EntryService
  ) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if(user){
          this.userDetails = user;
          console.log(this.userDetails);
          this.entryService.initFirestoreConnection(this.userDetails.uid);
        }else{
          this.userDetails = null;
        }
      }
    )
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  isLoggedIn() {
    return this.userDetails != null;
  }

  logout() {
    this._firebaseAuth.auth.signOut();
  }

}
