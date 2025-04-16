import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador = 0;

  cores = ['red', 'blue', 'green', 'yellow', 'purple'];
  corAtual = this.cores[0];

  contarClique() {
    this.contador++;
    this.corAtual = this.cores[this.contador % this.cores.length];
  }
}
