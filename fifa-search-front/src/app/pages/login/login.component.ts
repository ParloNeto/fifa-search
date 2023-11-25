import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  login: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", [Validators.required, Validators.min(6), Validators.max(20)]],
    });
  }


}
