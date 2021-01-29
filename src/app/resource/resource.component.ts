import { Component, OnInit,ViewChild,ElementRef,AfterViewInit  } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resourceList:any;
  p: number=1;
  total: number;
  loading: boolean;

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private authenticationService: AuthenticationService, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    
    this.userService.getResources().subscribe(

      data => {
        console.log(data)

        this.resourceList =data["data"]
        console.log(this.resourceList);

        }, 

      error => {
        console.log("some error occured")

      }) 

    }
    
}
