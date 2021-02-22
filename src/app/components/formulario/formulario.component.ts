import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /**
   * se genera un formulario de tipo Model, para eso importar
   * ReactiveFormsModule
   */
  formulario: FormGroup;

  constructor(private servicioServe: ServicioService) {

    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl()

    })
  }

  ngOnInit(): void {
  }

  /**
   * 
   */
  onSubmit() {
    console.log(this.formulario.value);
    this.servicioServe.agregarPost(this.formulario.value);
    this.formulario.reset();
  }



}
