import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguroService } from '../../seguros.service';
import { Seguro, TipoSeguro } from '../../Seguro';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seguro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {
  formulario: any;
  tituloFormulario:  string = '';;

  constructor(private seguroService: SeguroService) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Seguro';
    this.formulario = new FormGroup({
      id: new FormControl(null),
      tipo: new FormControl(null),
      valorCoberto: new FormControl(null),
      premio: new FormControl(null),
      dataInicio: new FormControl(null),
      dataFim: new FormControl(null),
      clienteId: new FormControl(null)
    })
  }

  enviarFormulario(): void {
    const seguro: Seguro = this.formulario.value;
    this.seguroService.criar(seguro).subscribe(result=>{
      alert("Seguro inserido com sucesso!");
    })
  }

}
