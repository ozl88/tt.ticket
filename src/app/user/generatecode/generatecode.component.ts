import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as ShortHash from 'shorthash';
import { UserInfo } from '../../model/userinfo';
import { AttendantInfo } from '../../model/attendantInfo';


@Component({
  selector: 'app-generatecode',
  templateUrl: './generatecode.component.html',
  styleUrls: ['./generatecode.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class GeneratecodeComponent implements OnInit {

  userCollection: AngularFirestoreCollection<UserInfo>;
  users: Observable<UserInfo[]>;
  message: string = "";
  
  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
  }

  generatecodeforAll() {
    console.log("generate code for all user, click...")
    this.message = "Generating...";
    this.afs.collection('users').ref.get().then((value) => {
      value.forEach((v) => {

        let data = v.data() as UserInfo;
      //   let x = data.contact;
      //   console.log("before: " + data.contact);
      //   if (!data.contact.startsWith("+886") && !data.contact.startsWith("+6")) {
      //     x = "+6" + data.contact;
      //     console.log("after :"+ x);
      //  }

      //   this.afs.collection('users').doc(v.ref.id).update({
      //     contact: x
      //   })

        let stringTohash = "HI7Oj1OY284i0YD2aJC1" + data.contact;
        let hash = ShortHash.unique(stringTohash);
        let newAttendantInfo = new AttendantInfo();
        newAttendantInfo.eventDocId = "HI7Oj1OY284i0YD2aJC1";
        newAttendantInfo.userDocId = v.ref;
        newAttendantInfo.code = hash.toUpperCase();
        newAttendantInfo.checkin = false;
        newAttendantInfo.withdraw = false;
        newAttendantInfo.walkin = false;
        newAttendantInfo.claim = false;
        newAttendantInfo.checkintime = "";

        this.afs.collection('attendants').add(newAttendantInfo.getData())
          .then((r) => {
            this.message = "Done generate code for all users";
          });
      })
    })

  }

}
