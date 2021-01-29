import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule,AbstractControl } from '@angular/forms';
import { rendererTypeName } from "@angular/compiler";
import {UserService} from '../user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AlertService} from '../alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;
  loading = false;
 
  constructor(private formBuilder: FormBuilder, private userService: UserService,private router: Router,private alertService: AlertService,private snackBar: MatSnackBar) {
   
   }

  

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })


}



onSubmit() {
  this.submitted = true;

    this.userService.register(this.registerForm.value).subscribe(
      (resp) => {

        this.openSnackBar('Registration successful', 'Close');
      this.router.navigate(['/login']);
        console.log(resp);
      },
      (error) => {
      this.alertService.error(error);
      this.loading = false;
      }
    );

}

public errorHandling = (control: string, error: string) => {
  return this.registerForm.controls[control].hasError(error);
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}


}