import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nevbar } from './nevbar/nevbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nevbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hamzah_portfolio');
}
