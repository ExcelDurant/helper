import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme:string= '';
  logged:boolean | undefined;
  
  constructor(
    private themeService:ThemeService,
    public authService:AuthService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.theme = this.themeService.theme;
    this.logged = this.loggedIn();
    console.log(this.logged);
  }

  changeTheme(theme:string) {
    this.themeService.changeTheme(theme);
  }

  loggedIn() {
    return this.authService.isLoggedIn
  }


  signOut() {
    this.authService.SignOut();
  }

}
