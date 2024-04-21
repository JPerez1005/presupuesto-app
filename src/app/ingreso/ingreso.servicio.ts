import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario",5000000),
        new Ingreso("Alquileres",4000000)
    ];

    buscarI(ingreso:Ingreso){
        let i:number=this.ingresos.indexOf(ingreso);
        return i;
    }

    eliminarI(ingreso:Ingreso){
        let i=this.buscarI(ingreso);
        this.ingresos.splice(i,1);
    }
}