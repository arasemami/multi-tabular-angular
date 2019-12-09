import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PeopleListComponent } from './people-list/people-list.component';
import { TabService } from './shared/tab.service';
import { Tab } from './shared/tab.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tabs = new Array<Tab>();
  selected = new FormControl(0);

  constructor(private tabService: TabService) { }

  ngOnInit(): void {
    this.tabService.whenTabOpens().subscribe(tab => {
      this.tabs.push(tab);
    });
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
