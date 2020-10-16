import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {
  date_event = JSON.parse(localStorage.getItem('editevent'));
  constructor() { }

  ngOnInit(): void {
  }

}
