import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
   
  }
}
