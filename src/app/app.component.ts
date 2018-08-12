import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCODYh3v-OBdO4gbuy8p0e2FAulu03RZlM",
      authDomain: "mj-recipe-book.firebaseapp.com"
    });
  }

}
