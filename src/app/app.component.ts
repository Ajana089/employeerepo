import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeeleaveapplication';
  loggeduserdata:any;


  constructor(){
    const loggeddata=sessionStorage.getItem("bankuser");
    if(loggeddata!=null){

      this.loggeduserdata=JSON.parse(loggeddata);

    }
  }

  logOff(){
    sessionStorage.removeItem('bankuser');
  }
}
