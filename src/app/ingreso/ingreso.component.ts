import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  //creamos el arreglo
  ingresos:Ingreso[]=[];

  constructor(private is:IngresoServicio) { this.ingresos=this.is.ingresos; }

  ngOnInit(): void {
  }

  eliminarRegistro(i:Ingreso){
    this.is.eliminarI(i);
  }

}
