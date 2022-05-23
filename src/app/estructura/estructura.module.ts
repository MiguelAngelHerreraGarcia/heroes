import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { PagePrincipalComponent } from './components/page-principal/page-principal.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    PieComponent,
    PagePrincipalComponent,
    CuerpoComponent
  ],
  exports: [
    PagePrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EstructuraModule { }
