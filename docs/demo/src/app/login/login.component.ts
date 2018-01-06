import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {
  private _displayName: String;
  constructor(private _authService: AuthService, private _routingModule: Router) { }

  ngOnInit() {
    
  }

  private _login(): void {
    this._authService.login().then(success => {
      this._routingModule.navigate(['home']);
    }, err => {
      console.log("fix ur code bro");
    });
  }

  private _logout(): void {
    this._authService.logout().then(success => {
      this._routingModule.navigate(['login']);
    }, err => {
      console.log("fix ur code bro again");
    });
  }
}
