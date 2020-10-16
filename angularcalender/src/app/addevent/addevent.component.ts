import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  postData = {
    title: '',
    body: '',
    pid: '',
    did: '',
    date: ''
     };
  url = "http://104.248.143.105:8000/eventsmanager/addevent/";
//  this.alldoctors = JSON.parse(localStorage.getItem('doctors'));

  url2 = "http://104.248.143.105:8000/signupmanager/viewdoctors/"
  json2 = {};
  json;
  alldoctors;
  userdata;

 
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  
  this.loadthis();
  }
  
  loadthis(){
  this.userdata = JSON.parse(localStorage.getItem('user'));
  this.postData.pid = this.userdata.id;

  this.http.post(this.url2, this.json2).toPromise().then((doctors:any) => {

  this.alldoctors = doctors;
  console.log(this.alldoctors);
  });
  }
 
  addevent(){
      this.http.post(this.url, this.postData).toPromise().then((crt:any) => {
      console.log(crt);
      if(crt.pid == this.postData.pid){
                this.router.navigate(['appointment']);
                }else{
                    alert('the appointment has not been created');
                    }

         });
  

}

}
