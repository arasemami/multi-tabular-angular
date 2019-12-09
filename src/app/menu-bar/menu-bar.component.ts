import { Component, OnInit } from '@angular/core';
import { TabService } from '../shared/tab.service';
import { Tab } from '../shared/tab.model';
import { PeopleListComponent } from '../people-list/people-list.component';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  constructor(private tabService: TabService) { }

  public openPeopleList() {
    this.tabService.open(new Tab('People List', PeopleListComponent, { name: 'name' }));
  }

  public openCourseList() {
    this.tabService.open(new Tab('Course List', CourseListComponent));
  }
}
