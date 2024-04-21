import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  tipo:string="ingreso";
  descripcion:string;
  valor:number;

  constructor(
    private is:IngresoServicio,
    private es:EgresoServicio
  ) {  }

  tipoOperacion(e){
    this.tipo=e.target.value;
  }

  agregarValor(){
    if(this.tipo==="ingreso")
      this.is.ingresos.push(
        new Ingreso(this.descripcion,this.valor)
      );
    else
      this.es.egresos.push(
        new Egreso(this.descripcion,this.valor)
      );
  }

}
