import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Credentials } from '.';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NhUser } from './dto/nh-user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private fbAuthService: AngularFireAuth) {}

  get isLoggedIn(): Observable<boolean> {
    return this.fbAuthService.authState.pipe(map(loggedUser => !!loggedUser));
  }

  login(credentials: Credentials): Observable<NhUser> {
    const { username, password } = credentials;

    return from(
      this.fbServiceInstance.signInWithEmailAndPassword(username, password)
    ).pipe(
      map((firebaseUser: firebase.auth.UserCredential) =>
        this.mapToNhUser(firebaseUser)
      )
    );
  }

  register(): Observable<NhUser> {
    return from(
      this.fbServiceInstance.createUserWithEmailAndPassword('', '')
    ).pipe(
      map((firebaseUser: firebase.auth.UserCredential) =>
        this.mapToNhUser(firebaseUser)
      )
    );
  }

  private get fbServiceInstance() {
    return this.fbAuthService.auth;
  }

  private mapToNhUser(firebaseUser: firebase.auth.UserCredential): NhUser {
    return {
      name: firebaseUser.user.displayName,
    };
  }
}
