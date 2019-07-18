import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phoneNumberCodes: Array<string> = ['+359', '+721', '+115', '+302', '+709'];

  constructor() { }

  ngOnInit() {
  }

  register(data) {
    console.log(data);
  }

}
