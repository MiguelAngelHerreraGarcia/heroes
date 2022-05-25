import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent implements OnInit {
  public lista: any[];

  constructor() {
    this.lista = [
      {
        nombre: 'Superman Malo',
        imagen: '',
        ataque: 95,
        defensa: 93,
        poder: 350,
        vida: 100,
        honor: 120
      },
      {
        nombre: 'Thor Malo',
        imagen: '',
        ataque: 92,
        defensa: 75,
        poder: 275,
        vida: 100,
        honor: -45
      },
      {
        nombre: 'Wonder Woman',
        imagen: '',
        ataque: 88,
        defensa: 91,
        poder: 300,
        vida: 0,
        honor: 70
      }
    ];
    // this.lista = [];
    console.log(this.lista);
  }

  ngOnInit(): void {}
}
