import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public register(){
    const user = this.myForm.value
  }

  private buildForm(){
    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      repetirContrasena: ['', [Validators.required, ]],
    });
  }

  private validarClave(control: AbstractControl) {
    let resultado = {matchPassword: true};

    if (control.parent.value.password == control.value) 
      resultado = null;

    return resultado;
  }

  ngOnInit(): void {
    
  }
}
