import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: any;
  title = 'ProjectName';

  constructor(private router: Router, private _authService:AuthenticationService) {
    this._authService.currentUser.subscribe(x => this.currentUser = x);
  }

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this._authService.logout();
    this.router.navigate(['/login']);
}
}
