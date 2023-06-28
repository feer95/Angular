import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
    id_user: 0,
    name: '',
    last_name: '',
    photo: '',
    repetirPassword: ''
  };

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.login(this.user).subscribe(
      (response) => {
          const responseData = response.data; 
          console.log(response.data);
          if (responseData) {
            this.toastr.success('Inicio de sesión exitoso');
            this.userService.logueadoId = response.data[0].id_user;
            this.router.navigate(['/books']);
          } else {
            this.toastr.error('Los datos de inicio de sesión no coinciden');
            console.log('Los datos de inicio de sesión no coinciden');
            
          }
        }
      );
    }
  }
}
