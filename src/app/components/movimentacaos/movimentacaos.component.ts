import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentacaoService } from '../../movimentacaos.service';
import { Movimentacao } from '../../Movimentacao';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movimentacaos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movimentacaos.component.html',
  styleUrl: './movimentacaos.component.css'
})
export class MovimentacaosComponent implements OnInit {
  formulario : any;
  tituloFormulario : string = '';

  constructor(private movimentacaoService: MovimentacaoService){ }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Movimentação';
    this.formulario = new FormGroup({
      id : new FormControl(null),
      tipo: new FormControl(null),
      valor: new FormControl(null),
      dataMovimentacao : new FormControl(null)
    })
  }
  enviarFormulario():void{
    const movimentacao: Movimentacao = this.formulario.value;
    this.movimentacaoService.criar(movimentacao).subscribe(result=>{
      alert("Conta inserida com sucesso!");
    })
  }

}
