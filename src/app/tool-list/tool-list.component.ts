import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  toolList = [
    {
      name: 'Firebase',
      used: true
    }, 
    {
      name: 'Firestore',
      used: true
    }, 
    {
      name: 'Bootstrap',
      used: false
    }
    , 
    {
      name: 'jQuery',
      used: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
