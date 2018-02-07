import { Component, OnInit } from '@angular/core';

import { UserInfo } from '../../model/userinfo';
import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface User {
  firstname: string;
  lastname: string;
  contact: string;
  email: string;
  organization: string;
  id?: string;
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  newUserInfo: UserInfo;
  user: any;

  constructor(private afs: AngularFirestore) {
    this.newUserInfo = new UserInfo();

    this.userCollection = this.afs.collection('users', ref => {
      return ref.orderBy('lastname');
    });

    console.log("usercollection: ", this.userCollection);
    this.users = this.userCollection.valueChanges();
  }

  ngOnInit() {
  }


  addUser() {
    console.log("userinfo: ", this.newUserInfo);

    this.afs.collection('users').add(this.newUserInfo.getData()).then(() =>
      console.log("add successfully"));
    this.clearData();
  }

  clearData() {
    this.newUserInfo = new UserInfo();
  }

}
