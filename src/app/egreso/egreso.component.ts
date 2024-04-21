import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal:number;

  //creamos el arreglo
  egresos:Egreso[]=[];

  constructor(private es:EgresoServicio) { this.egresos=this.es.egresos; }

  ngOnInit(): void {
  }

  eliminarRegistro(e:Egreso){
    this.es.eliminarE(e);
  }

  calcularPorcentaje(e:Egreso){
    return e.valor/this.ingresoTotal;
  }

}
