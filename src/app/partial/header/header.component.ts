import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme:string= '';
  constructor(private themeService:ThemeService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.theme = this.themeService.theme;
  }

  changeTheme(theme:string) {
    this.themeService.changeTheme(theme);
  }


}
