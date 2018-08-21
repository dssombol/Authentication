import { Component, OnInit } from '@angular/core';
import { LoginGruard } from './login-gruard';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private rout: Router, private _AuthService:AuthService) { }
  login = new LoginGruard();
  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.login);
    if(this.login.username=="sombol" && this.login.password=="12345"){
      this.rout.navigate(['/admin'])
      this._AuthService.setLogin(true);
      return false;
      
    }else{
      alert("No Router");
    }
  }
}
