import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  signupUser(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      console.error(error)
    });
  }

  signinUser(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      firebase.auth().currentUser.getIdToken().then((token: string) => {
        this.token = token;
        this.router.navigate(['/home']);
      });
    }).catch(error => {
      console.error(error)
    });
  }

  getToken(): any {
    firebase.auth().currentUser.getIdToken().then((token: string) => {
      this.token = token;
    });
    return this.token;
  }

  logout(): void {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }
}
