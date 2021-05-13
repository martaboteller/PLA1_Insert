import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Declare a form
  public loginForm: FormGroup;

  //Cuando se instancie llama al módulo router de la instancia Router
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  //Function to create the form
  buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  //Provide access
  doLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(['/list']);
      //Lleva claudator porque se le pueden poner opciones a la ruta
    }
  }
}
