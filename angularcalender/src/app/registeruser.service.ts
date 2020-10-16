import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor( private http: HttpClient ) { }

  registerusers(userData){
    return this.http.post('http://104.248.143.105:8000/signupmanager/insertuser/', userData)
  }

}
