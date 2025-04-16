import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Contador de Cliques";
  clickCount = 0;

  // Lista de imagens (use URLs locais ou online)
  imagens: string[] = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',
    'assets/img4.jpg'
  ];

  get imagemAtual(): string {
    return this.imagens[this.clickCount % this.imagens.length];
  }

  contarClique(): void {
    this.clickCount++;
  }
}

