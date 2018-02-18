import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  login: any;
  userName: any;
  dashboard: Boolean = false;
  
 
  userList: Array<any> = [
    {
      name: "sankar",
      password: "sankar"    
    },
   
    
  ]
  constructor(private _flashMessagesService: FlashMessagesService, private loginForm: FormBuilder) {
 
  this.login = this.loginForm.group({
    'name': ['', Validators.required],
    // 'email': ['', [Validators.required, ValidationService.emailValidator]],
    'password': ['', Validators.required]
  })
}
onSubmitClick() {
  console.log(this.login.value);
  for (let i = 0; i < this.userList.length; i++) {
    if (this.login.value.name == this.userList[i]['name'] && this.login.value.password == this.userList[i]['password']) {
      this.dashboard = true;
      this.userName = this.login.value.name;
      
    }

      else{
        this._flashMessagesService.show('Username or Password Incorrect', { cssClass: 'alert' } );
        this.login.reset()
      }
        
    
  }
}
onHomeClick() {
  this.dashboard = false;
  this.login.reset();
}
  
  

  ngOnInit() {
  }

}