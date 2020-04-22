import { Component, OnInit } from '@angular/core';
import {LogIn} from "../DTO/log-in";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new LogIn('','');
  constructor() { }

  ngOnInit(): void {
  }

}
