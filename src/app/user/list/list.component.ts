import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserInfo } from '../../model/userinfo';
import { AttendantInfo } from '../../model/attendantInfo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userCollection: AngularFirestoreCollection<UserInfo>;
  users: Observable<UserInfo[]>;

  constructor(
    private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users', ref => {
      return ref.orderBy('organization');
    });

    this.users = this.userCollection.valueChanges();
    this.users = this.userCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          x => {
            const data = x.payload.doc.data() as UserInfo;
            data.id = x.payload.doc.id;
            return data;
          });
      });
  }

  ngOnInit() {
  }

}
