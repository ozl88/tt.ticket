import { CanActivate, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService implements CanActivate {

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return Observable.from(this.firebaseAuth.authState)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/login' ]);
      })
    }

    logout() {
      this.firebaseAuth.auth.signOut();
      console.log('logged out');
      this.router.navigateByUrl('/login');
   }    
 
}











// import { Injectable } from '@angular/core';

// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

// import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class AuthService {

//   user: Observable<firebase.User>;
//   authenticated: boolean = false;

//   constructor(private firebaseAuth: AngularFireAuth) {
//     this.firebaseAuth.authState.subscribe(
//       (auth)=>{
//         if(auth!=null){
//           this.user = firebaseAuth.authState;
//           this.authenticated = true;
//         }

//     });
//    }


//    signup(email: string, password: string) {
//     var user = null;
//     this.firebaseAuth.auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(value => {
//         console.log('Success!', value);
//         user = firebase.auth().currentUser;
//         user.sendEmailVerification();
//       })
//       .catch(err => {
//         console.log('Something went wrong:',err.message);
//       });    
//   }

//   login(email: string, password: string) {
//     this.firebaseAuth.auth
//       .signInWithEmailAndPassword(email, password)
//       .then(value => {
//         if(value.isEmailVerified()){
//           console.log('Nice, it worked!', value);
//         }else{
//           console.log('not verify', value.isEmailVerified());
//         }
        
//       })
//       .catch(err => {
//         console.log('Something went wrong:',err.message);
//       });
//   }

//   logout() {
//     this.firebaseAuth.auth
//       .signOut();
//   }
// }
