import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft} from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private auth:AuthService) {

    this.firebaseAuth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.auth.logout();
  //    this.firebaseAuth.auth.signOut();
  //    console.log('logged out');
  //    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
