import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
 
  valor1: '';
  valor2: '';  

  public user: any;
  
  constructor() {    
    this.user = {
      nombre: '',
      apellido: ''
    };    
  } 

  suma(){
    let result = this.valor1+this.valor2;
    return result;
  }


  ngOnInit(): void {
  }

}
