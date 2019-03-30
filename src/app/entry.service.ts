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
    this.entriesCollection = this._firestore.collection<Entry>('entries', ref => ref.where('uid', '==', uid).orderBy('created', 'desc'));
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

  saveEntries(entries : Entry[]) {
    var newCollection = this._firestore.collection<Entry>('entries');
    console.log(entries);
    console.log(entries);
    for(var i in entries){
      newCollection.add(entries[i]);
    }
  }
}
