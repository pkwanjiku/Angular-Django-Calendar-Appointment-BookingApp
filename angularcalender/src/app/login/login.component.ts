import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   postData = {
    email: '',
    password: ''
     };
   url = "http://104.248.143.105:8000/signupmanager/viewuser/";

    json;

   constructor(private http: HttpClient, private router:Router) {
     }

  ngOnInit(): void { }


  loginuser(){

   this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data);
      if(data.email == this.postData.email){
                window.localStorage.setItem('user',JSON.stringify(data));
                this.router.navigate(['appointment']);
                }else{
                    alert("login unsuccesful, try again");
                    }

         });
  }
}
