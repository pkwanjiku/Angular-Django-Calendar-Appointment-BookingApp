import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userdata = JSON.parse(localStorage.getItem('user'));
  status = 1;
  constructor(private router:Router) { }
  logoutuser(){
    localStorage.clear();
    this.status = 0;
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
