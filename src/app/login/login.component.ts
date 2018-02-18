import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onHome = new EventEmitter();
  
                                                                                                             
    
  @Input() userName: any;
  constructor(private router: Router) { }
  onHomeClick() {
    //this.router.navigate(['home'])
    this.onHome.emit()
  }
  
  ngOnInit() {
  }

}
