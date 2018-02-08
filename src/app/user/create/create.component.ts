import { Component, OnInit } from '@angular/core';

import { UserInfo } from '../../model/userinfo';
import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as ShortHash from 'shorthash';
import { AttendantInfo } from '../../model/attendantInfo';

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

  message: string = "";

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

    if (this.newUserInfo.contact &&
      !this.newUserInfo.contact.startsWith("+886") && !this.newUserInfo.contact.startsWith("+6")) {
      this.newUserInfo.contact = "+6" + this.newUserInfo.contact;
    }

    if (!this.newUserInfo.organization) {
      this.newUserInfo.organization = "-";
    }

    this.afs.collection('users').add(this.newUserInfo.getData()).then((res) => {
      let stringTohash = "HI7Oj1OY284i0YD2aJC1" + this.newUserInfo.contact;
      let hash = ShortHash.unique(stringTohash);
      let newAttendantInfo = new AttendantInfo();
      newAttendantInfo.eventDocId = "HI7Oj1OY284i0YD2aJC1";
      newAttendantInfo.userDocId = res;
      newAttendantInfo.code = hash.toUpperCase();
      newAttendantInfo.checkin = false;
      newAttendantInfo.withdraw = false;
      newAttendantInfo.walkin = false;
      newAttendantInfo.checkintime = "";

      this.afs.collection('attendants').add(newAttendantInfo.getData())
        .then((r) => {
        });
    }
    );
    this.clearData();
  }

  clearData() {
    this.newUserInfo = new UserInfo();
  }

}
