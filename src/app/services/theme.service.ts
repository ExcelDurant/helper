import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme:string = 'theme-light';

  private presentThemeSubject = new BehaviorSubject('theme-light');

  presentTheme$: Observable<string> = this.presentThemeSubject.asObservable();
  constructor() {}

  changeTheme(theme:string) {
    this.presentThemeSubject.next(theme);
  }
}
