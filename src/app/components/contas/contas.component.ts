import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasService } from '../../contas.service';
import { Conta } from '../../Conta';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent implements OnInit {
  formulario : any;
  tituloFormulario : string = '';

  constructor(private contasService: ContasService){ }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Conta';
    this.formulario = new FormGroup({
      id : new FormControl(null),
      numeroConta: new FormControl(null),
      tipoConta: new FormControl(null),
      saldo : new FormControl(null),
      dataAbertura : new FormControl(null),

      clienteId : new FormControl(null),
      agenciaId : new FormControl(null),
    })
  }
  enviarFormulario():void{
    const conta: Conta = this.formulario.value;
    this.contasService.criar(conta).subscribe(result=>{
      alert("Conta inserida com sucesso!");
    })
  }

}
