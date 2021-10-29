// import { Injectable } from '@angular/core';
// import { Observable, ReplaySubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GoogleSigninService {

//   private auth2: gapi.auth2.GoogleAuth;
//   private subject = new ReplaySubject<any>(1)
//   constructor() {
//     gapi.load('auth2', () => {
//       this.auth2 = gapi.auth2.init({
//         client_id: '655550997112-pv485bcglm6c3p1f83fm8b68ruj1ih9u.apps.googleusercontent.com'
//     })
//   })
// }

//   public signIn() {
//     this.auth2.signIn(
//       {
//         scope: 'https://www.googleapis.com/auth/gmail.readonly'
//       }
//     ).then(user => { this.subject.next(user) }).catch(() => {
//       this.subject.next(null)
//     })
//   }

//   public signOut() {
//     this.auth2.signOut().then(() => {
//       this.subject.next(null)
//     })
//   }

//   public observable(): Observable<any> {
//     return this.subject.asObservable();
//   }
// }
