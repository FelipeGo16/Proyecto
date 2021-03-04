import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  numero = 3;
  nombre = 'Juan';
  sueldos = [1900, 2000, 2500, 4000, 200];
  Activo = false;
  Sitio = 'https://www.google.com/';
  valor = 5;
  

  public usuario: any;

  Validacion(){
    if(this.Activo)
     return "Es activo";
     else
     return "No es activo";
  }

  Sumatoria(){
    let suma=0;
    for(let i=0; i<this.sueldos.length; i++)
    suma+=this.sueldos[i];
    return suma;
  }

  Duplicar(valor: string): string{
    return valor + valor;
  }
  
  
  constructor() { 

    this.usuario = {
      nombre: 'Carlos',
      apellidos: 'Perez',
      nacionalidad: 'Colombiano',
      genero: 'Masculino'
    };


  }

  ngOnInit(): void {
  }

}
