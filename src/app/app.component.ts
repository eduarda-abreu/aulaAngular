import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickCount = 0;

  imagens = [
    'assets/img1.png',
    'assets/img2.png',
    'assets/img3.png'
  ];

  imagemAtual = this.imagens[0];

  contarClique() {
    this.clickCount++;
    const index = this.clickCount % this.imagens.length;
    this.imagemAtual = this.imagens[index];
  }
}
