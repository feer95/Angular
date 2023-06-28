import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {
    this.buildForm();
  }

  public register() {
    const user: User = this.myForm.value;
    if (user.password !== user.repetirPassword) {
      this.toastr.error('Las contraseñas no coinciden');
    } else {
      this.userService.register(user).subscribe(
        response => {
          this.toastr.success('Usuario registrado exitosamente');
          console.log(response);
        },
        error => {
          this.toastr.error('Error al registrar el usuario');
          console.log(error);
        }
      );
    }
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repetirPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, { validators: this.validarClave });
  }

  private validarClave(control: AbstractControl) {
    let resultado = { matchPassword: true };

    if (control.parent && control.parent.value.password === control.value) {
      resultado = null;
    }

    return resultado;
  }

  ngOnInit(): void {}

}
