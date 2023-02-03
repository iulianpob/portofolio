import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
}) 
export class ToggleModeService {
    // private lightModeSubject = new Subject<boolean>();
    private lightModeSubject = new BehaviorSubject<boolean>(false);

    lightMode$ = this.lightModeSubject.asObservable();

    constructor() { }

    toggleLightMode(mode:boolean) {
        this.lightModeSubject.next(mode)
    }
    
}