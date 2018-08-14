import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  constructor(private router: Router) {
    console.log("Inside HomeComponent : Constructor");
  }

  ngOnInit() {
  }

  register(){
    console.log("Inside HomeComponent : register method");
    this.router.navigate(['/register']);

  }

  login(){
    console.log("Inside HomeComponent : login method");
    this.router.navigate(['/login']);
  }

}
