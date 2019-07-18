import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phoneNumberCodes: Array<string> = ['+359', '+721', '+115', '+302', '+709'];

  @ViewChild('form', { static: false })
  htmlForm: NgForm

  constructor() { }

  ngOnInit() {
  }

  register(data) {
    if (!this.htmlForm.invalid) {
      this.htmlForm.reset;
    }
  }

}
