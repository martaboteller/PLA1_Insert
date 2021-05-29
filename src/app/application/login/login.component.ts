import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Declare a form
  public loginForm: FormGroup;

  //Call router and FormBuilder module
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  //Function to create the form
  buildForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  //Provide access
  /* doLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(['/list']);
    } else {
      this.loginForm.controls['username'].markAllAsTouched();
      this.loginForm.controls['password'].markAsTouched();
    }
  } */

  doLogin() {
    if (this.loginForm.valid) {
      //Validate email at auth service
      const email = this.loginForm.get('email').value;
      this.authService
        .login(email)
        .then(() => {
          console.log('Access accepted');
          //Store loggedUser to localstorage
          this.authService.setSession(this.userService.getUserByEmail(email));
          this.router.navigate(['/list']);
        })
        .catch(() => {
          console.log('Access denied');
          document.getElementById('loginFail').style.visibility = 'visible';
        });
    }
  }
}
