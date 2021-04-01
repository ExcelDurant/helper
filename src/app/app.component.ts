import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helper';
  theme:string= ''
  constructor(public themeService:ThemeService){}
  ngOnInit(): void {
    this.theme = this.themeService.theme;
  }
  ngDoCheck() {
    this.theme = this.themeService.theme;
  }
}
