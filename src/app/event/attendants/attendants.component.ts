import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserInfo } from '../../model/userinfo';
import { AttendantInfo } from '../../model/attendantInfo';
import { AttendantFullInfo } from '../../model/attendantfullinfo';

@Component({
  selector: 'app-attendants',
  templateUrl: './attendants.component.html',
  styleUrls: ['./attendants.component.css']
})
export class AttendantsComponent implements OnInit {

  attendantsCollection: AngularFirestoreCollection<AttendantFullInfo>;
  attendants: Observable<AttendantFullInfo[]>;
  attendantFullInfo: Observable<AttendantFullInfo[]>;


  constructor(private afs: AngularFirestore) {
    this.attendantsCollection = this.afs.collection('attendants', ref => {
      return ref.orderBy('code');
    });

    var abcd = new Array<UserInfo>();

    this.afs.collection('users').ref.get().then((value) => {
      value.forEach((v) => {
        let data = v.data() as UserInfo;
        abcd.push(data);
      })
    });


    var userList = this.afs.collection('users');
    userList
    this.attendants = this.attendantsCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          x => {
            var attendantfullinfo = new AttendantFullInfo();
            var attendantInfo = x.payload.doc.data() as AttendantInfo;
            attendantInfo.id = x.payload.doc.id;

            attendantfullinfo.attendant = attendantInfo;
            attendantfullinfo.user = new UserInfo();
            abcd.forEach(x => {
              if (x.id == attendantInfo.userDocId.id) {
                attendantfullinfo.user = x;
              }
            });

            userList.doc(attendantInfo.userDocId.id).ref.get()
              .then((value) => {
                attendantfullinfo.user = value.data() as UserInfo;
              });
            return attendantfullinfo;
          });
      });
  }

  ngOnInit() {
  }

}
