import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // ✅ Adicione esta linha

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // ✅ Adicione esta linha (rotas vazias por enquanto)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
