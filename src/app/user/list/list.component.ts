import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { User } from '@firebase/auth-types';
import * as ShortHash from 'shorthash';
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


    console.log("usercollection: ", this.userCollection);
    console.log("usercollection: ", this.userCollection);
    this.users = this.userCollection.valueChanges();
    var a = ShortHash.unique('mediaongzhenli');
    console.log(a);

    this.users = this.userCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          x => {
            const data = x.payload.doc.data() as UserInfo;
           // console.log("data : ", data);
            data.id = x.payload.doc.id;

            //todo generate code
            // let stringTohash = "HI7Oj1OY284i0YD2aJC1" + data.firstname + data.lastname
            // let newAttendantInfo = new AttendantInfo();
            // newAttendantInfo.eventDocId = "HI7Oj1OY284i0YD2aJC1";
            // newAttendantInfo.userDocId = x.payload.doc.ref;
            // newAttendantInfo.code = ShortHash.unique(stringTohash);
            // newAttendantInfo.checkin = false;
            // newAttendantInfo.withdraw = false;
            // this.afs.collection('attendants').add(newAttendantInfo.getData());
            return data;
          });
      });
    //console.log("all: ", this.users);


    // var mainListItems = [];
    // var a = this.afs.collection('attendants', ref => {
    //   console.log("ref: ", ref)
    //   var newItem = new AttendantInfo();
    //   newItem.id = ref.id;
    //   if (newItem.userDocId) {
    //     newItem.userDocId.get()
    //     .then(res => { newItem.userDocId = res.data()
    //     console.log("new iteminside", newItem);
    //     })
    //     .catch(err => console.error(err));
    //   }
    //   mainListItems.push(newItem);

    //   console.log("list: ", mainListItems);
    //   return ref.orderBy('organization');
    // });


  }

  ngOnInit() {
  }

}
