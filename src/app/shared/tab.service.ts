import { Injectable, Type } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Tab } from './tab.model';

@Injectable({providedIn: 'root'})
export class TabService {
    private subject: Subject<Tab>;
    constructor() {
        this.subject = new Subject<Tab>();
    }

    public open(tab: Tab) {
        this.subject.next(tab);
    }

    public whenTabOpens(): Observable<Tab> {
        return this.subject;
    }
}
