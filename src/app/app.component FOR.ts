import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
    numeros = new Array<number>(1000);
    comptadors = new Array<number>(21);

    constructor(){
     //Inicialitzem les dades
      for (let index = 0; index < 1000; index++) {
        this.numeros[index] = (Math.round(Math.random() * 20));
      }
      

      // Inicialitzem comptadors
      for (let i = 0; i < this.comptadors.length; i++)
      this.comptadors[i] = 0;

  }

  computeHistograms(){
    for (let index = 0; index < this.numeros.length; index++){
      this.comptadors[this.numeros[index] += 1];
    }

  }

ngOnInit(){
}

}
