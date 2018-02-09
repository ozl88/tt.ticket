import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../model/userinfo';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  code: string;
  isVerified: boolean;
  message: string;
  docId: string;
  name: string = "";
  userinfo = new UserInfo();

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  }

  verifyCode() {
    console.log("verifyCode: ", this.code);

    this.message = "";
    var attendantsRef = this.afs.collection('attendants');
    var query = attendantsRef.ref.where("code", "==", this.code.toUpperCase()).get().then(
      (querySnapshot) => {
        console.log("size ", querySnapshot.size);
        if (querySnapshot.size > 0) {
          if (querySnapshot.docs[0].data().claim) {
            this.message = "claim before!";
          } else {
            this.isVerified = true;
            this.docId = querySnapshot.docs[0].id;
            var usersRef = this.afs.collection('users').doc(querySnapshot.docs[0].data().userDocId.id).ref.get()
              .then((value) => {
                this.userinfo = value.data() as UserInfo;
              });
          }
        } else {
          this.isVerified = false;
          this.message = "Not Exist!";
          console.log("No such document!");
        }
      }
    );
  }

  claim() {

    var attendantsRef = this.afs.collection('attendants');
    var query = attendantsRef.ref.where("code", "==", this.code.toUpperCase()).get().then(
      (querySnapshot) => {
        console.log("size ", querySnapshot.size);
        if (querySnapshot.size > 0) {
          if (querySnapshot.docs[0].data().claim) {
            this.message = "claim before! ";
          } else {
            this.isVerified = true;
            this.docId = querySnapshot.docs[0].id;
            var usersRef = this.afs.collection('users').doc(querySnapshot.docs[0].data().userDocId.id).ref.get()
              .then((value) => {
                this.userinfo = value.data() as UserInfo;
                this.message = "Claiming in progress..";
                this.afs.collection('attendants').doc(this.docId).update({
                  claim: true
                }).then((success) => {
                  this.message = "claim successfully";
                  this.isVerified = false;
                  this.code = "";
                });
              });
          }
        } else {
          this.isVerified = false;
          this.message = "Claim code not Exist!";
          console.log("No such document!");
        }
      }
    );

  }

  cancel() {
    this.isVerified = false;
    this.message = "";
    this.code = "";
  }
}
