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
  user:any
  
  constructor(
    private themeService:ThemeService,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.logged = this.authService.logged;
  }

  ngDoCheck() {
    this.theme = this.themeService.theme;
    // this.logged = this.loggedIn();
    this.logged = this.authService.logged;
    // console.log('I m' + this.logged);
    this.user = this.authService.user;
    // console.log(this.user);
  }

  changeTheme(theme:string) {
    this.themeService.changeTheme(theme);
  }


  signOut() {
    this.authService.logout();
    this.logged = false;
  }

}
