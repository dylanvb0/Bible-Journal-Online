import { Injectable } from '@angular/core';
import { Entry } from './Entry';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class EntryService {
  public entriesCollection : AngularFirestoreCollection<Entry>;
  public entries : Observable<Entry[]>;
  public searchText : string;

  constructor(
    private _firestore : AngularFirestore,
  ) {
  }

  initFirestoreConnection(uid){
    this.entriesCollection = this._firestore.collection<Entry>(uid, ref => ref.orderBy('created'));
    this.entries = this.entriesCollection.valueChanges();
  }

  addEntry(entry) {
    entry.id = this._firestore.createId();
    this.entriesCollection.doc(entry.id).set(entry).then();
  }

  saveEntry(entry) {
    this.entriesCollection.doc(entry.id).update(entry);
  }

  deleteEntry(entry) {
    this.entriesCollection.doc(entry).delete();
  }
}
