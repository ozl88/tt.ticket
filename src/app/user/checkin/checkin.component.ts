import { Component, OnInit } from '@angular/core';

import { moveIn, fallIn, moveInLeft } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserInfo } from '../../model/userinfo';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AttendantInfo } from '../../model/attendantInfo';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class CheckinComponent implements OnInit {

  code: string;
  isVerified: boolean;
  message: string;
  docId: string;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  }


  verifyCode() {
    console.log("verifyCode: ", this.code);

    this.message = "";
    var attendantsRef = this.afs.collection('attendants');
    var query = attendantsRef.ref.where("code", "==", this.code).get().then(
      (querySnapshot) => {
        console.log("size ", querySnapshot.size);
        if (querySnapshot.size > 0) {
          if (querySnapshot.docs[0].data().checkin) {
            this.message = "checkin before!";
          } else {
            this.isVerified = true;
            console.log(querySnapshot.docs[0].data());
            this.docId = querySnapshot.docs[0].id;
          }

        } else {
          this.isVerified = false;
          this.message = "Not Exist!";
          console.log("No such document!");
        }
      }
    );
  }

  checkin() {
    this.afs.collection('attendants').doc(this.docId).update({
      checkin: true
    }).then((success) => {
      this.message = "Check in successfully";
    });
  }

}
