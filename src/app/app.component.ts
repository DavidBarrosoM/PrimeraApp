import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmpleadosComponent} from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    EmpleadosComponent,BrowserModule,FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimeraApp';
  saludo = 'Saludos becarios de Eviden.'
}
