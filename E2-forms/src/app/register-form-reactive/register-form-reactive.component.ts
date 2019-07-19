import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('/^\d{8}$/')]],
      password: ['', [Validators.required, Validators.pattern('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/')]],
      image: ['', Validators]
    })
  }


  register() {

  }
}
