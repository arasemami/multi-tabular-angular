import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  @Input() name:string;

  constructor() { }

  ngOnInit() {
    console.log(this.name);
  }

}
