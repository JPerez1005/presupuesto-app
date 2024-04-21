import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("personal de aseo",800000),
        new Egreso("Ropa",500000)
    ];

    buscarE(egreso:Egreso){
        let i:number=this.egresos.indexOf(egreso);
        return i;
    }

    eliminarE(egreso:Egreso){
        let i=this.buscarE(egreso);
        this.egresos.splice(i,1);
    }
}