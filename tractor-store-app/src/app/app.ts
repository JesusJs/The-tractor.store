import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TsCartCounter } from './ts-cart-counter/ts-cart-counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TsCartCounter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tractor-store-app');
}
