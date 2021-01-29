import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this._authService.logout();
    this.router.navigate(['login']);
  }

}
