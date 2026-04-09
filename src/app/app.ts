import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profil } from "./components/profil/profil";
import { Parcours } from "./components/parcours/parcours";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profil, Parcours, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ky');
}
