import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  //creamos las variables que recibiremos
  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentajeTotal:number;

  constructor() { }

  ngOnInit(): void {
  }

}
