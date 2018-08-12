import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const pwd = form.value.pwd;
    this.authService.signinUser(email, pwd);
  }

}
