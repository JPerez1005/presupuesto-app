import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Creamos los arreglos
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  //conectamos los arreglos
  constructor(
    private is:IngresoServicio,
    private es:EgresoServicio
  ) {
    this.ingresos=is.ingresos;
    this.egresos=es.egresos;
  }
  
  /*ahora ya despues de tener todos los datos,
  podemos hacer multiples operaciones.*/

  getIngresoTotal(){
    let ingresoTotal:number=0;

    this.ingresos.forEach(ingreso=>{
      ingresoTotal += ingreso.valor;
    });

    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;

    this.egresos.forEach(egreso=>{
      egresoTotal += egreso.valor;
    });

    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
  

}
