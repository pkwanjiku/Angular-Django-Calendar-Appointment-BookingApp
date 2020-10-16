import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
   postData = {
    email: '',
    username: '',
    phone: '',
    utype: '',
    password: ''
     };
   url = "http://104.248.143.105:8000/signupmanager/insertuser/";
   json;
   constructor(private http: HttpClient, private router:Router) {
     }

  ngOnInit(): void { }
  

  insertuser(){

   this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data);
      if(data.email = this.postData.email){
                window.localStorage.setItem('user',JSON.stringify( this.postData));
		this.router.navigate(['appointment']);
		}else{
                    alert('the user' + this.postData.username + 'has not been created');
                    }   

         });
  }
}

