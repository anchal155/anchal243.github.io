import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import {AngularMaterialModule} from 'src/app/material.module';
import {UserService} from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {merge, Observable, of as observableOf, BehaviorSubject, combineLatest} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList :any;
  totalUsers:any;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private authenticationService: AuthenticationService, private userService: UserService,
    private router: Router) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe(

      data => {
        console.log(data);

        this.userList = data["data"];
        console.log(this.userList);
        

        }, 

      error => {
        console.log("some error occured")
        console.log(error.errorMessage)

    }) 
  }




}


