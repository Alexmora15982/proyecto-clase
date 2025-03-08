import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Mi aplicación de Angular';
  nombre: string = '';
  showContent: boolean = false;

  // Cosas que me gustan
  cosasQueMeGustan = [
    { nombre: 'Messi', imagen: 'assets/messi.jpg' },
    { nombre: 'Shakira', imagen: 'assets/shakira.jpg' },
    { nombre: 'Futbol', imagen: 'assets/futbol.jpg' },
    { nombre: 'Alcohol', imagen: 'assets/alcohol.jpg' },
    { nombre: 'Fumar', imagen: 'assets/fumar.jpg' }
  ];

  // Cosas que no me gustan
  cosasQueNoMeGustan = [
    { nombre: 'Bajoterra', imagen: 'assets/bajoterra.jpg' },
    { nombre: 'Gordas', imagen: 'assets/gordas.jpg' },
    { nombre: 'Maluma', imagen: 'assets/maluma.jpg' },
    { nombre: 'Ouija', imagen: 'assets/ouija.jpg' },
    { nombre: 'Fiel', imagen: 'assets/fiel.jpg' }
  ];

  // Enlaces de canciones de trap
  canciones = [
    { nombre: 'Luar - Canción 1', url: 'https://www.youtube.com/watch?v=m2wpyNBWRLw' },
    { nombre: 'Anuel - Canción 2', url: 'https://www.youtube.com/watch?v=YixyC1AiWWQ' },
    { nombre: 'Luar - Canción 3', url: 'https://www.youtube.com/watch?v=m2wpyNBWRLw' },
    { nombre: 'Anuel - Canción 4', url: 'https://www.youtube.com/watch?v=YixyC1AiWWQ' },
    { nombre: 'Luar - Canción 5', url: 'https://www.youtube.com/watch?v=m2wpyNBWRLw' },
    { nombre: 'Anuel - Canción 6', url: 'https://www.youtube.com/watch?v=YixyC1AiWWQ' },
    { nombre: 'Luar - Canción 7', url: 'https://www.youtube.com/watch?v=m2wpyNBWRLw' },
    { nombre: 'Anuel - Canción 8', url: 'https://www.youtube.com/watch?v=YixyC1AiWWQ' },
    { nombre: 'Luar - Canción 9', url: 'https://www.youtube.com/watch?v=m2wpyNBWRLw' },
    { nombre: 'Anuel - Canción 10', url: 'https://www.youtube.com/watch?v=m2wpyNBWRLw' }
  ];

  onSubmit() {
    if (this.nombre.trim() !== '') {
      this.showContent = true; // Actualiza la bandera para mostrar el contenido
    }
  }
}
