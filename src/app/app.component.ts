import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'auth';
  $loggedIn: Observable<boolean>;

  constructor(private auth: AuthService) {
    this.$loggedIn = auth.getLogin();
  }
  
  ngOnInit(): void {
    // this.$loggedIn.subscribe(x => {
    //   console.log(x);
    // })
  }
  

}
