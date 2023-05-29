import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  miPerfil: User;
  nuevoNombre: string;
  nuevoApellido: string;
  nuevoEmail: string;
  nuevaImagen: string;

  constructor() {
    this.miPerfil = new User(1, "Federico", "García Lorca", "titolorca@gmail.com", "https://m.media-amazon.com/images/I/41m-5zvLhrL.png", "password");
  }

  mostrarNombre() {
    this.miPerfil.name = this.nuevoNombre;
    this.miPerfil.last_name = this.nuevoApellido;
    this.miPerfil.email = this.nuevoEmail;
    this.miPerfil.photo = this.nuevaImagen;
    console.log(this.miPerfil);
  }
}


