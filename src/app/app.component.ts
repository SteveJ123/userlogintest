import { ChangeDetectorRef, Component } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core'
import { Router } from '@angular/router';
import { GoogleSigninService } from './google-signin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginauthentication';
 
  constructor( ){}

  ngOnInit() {
  
  }

  // signIn(){
  //   this.signInService.signIn();
  //   console.log("user", this.user);
  //   if(this.user){
  //     console.log("user", this.user);
  //   }
  // }

  // signOut(){
  //   console.log("signout");
  //   this.signInService.signOut();
  // }

  
}
