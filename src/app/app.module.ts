//Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { PagePrincipalComponent } from './estructura/components/page-principal/page-principal.component';
import { EstructuraModule } from './estructura/estructura.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstructuraModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
