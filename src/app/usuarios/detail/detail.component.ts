import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  inputs:['user']
})
export class DetailComponent implements OnInit {
  private user: Object;
  constructor() { }

  ngOnInit() {
  }

}
