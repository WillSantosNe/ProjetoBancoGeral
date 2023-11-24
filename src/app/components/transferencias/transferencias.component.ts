import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transferencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transferencias.component.html',
  styleUrl: './transferencias.component.css'
})

export class TransferenciasComponent implements OnInit {
  formulario : any;
  tituloFormulario : string = '';

  constructor(private TransferenciaService: TransferenciaService){ }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Conta';
    this.formulario = new FormGroup({
      id : new FormControl(null),
      Valor : new FormControl(null),
      DataTransferencia : new FormControl(null)
      })
  }
  enviarFormulario():void{
    const Transferencia: TransferenciaService = this.formulario.value;
    this.TransferenciaService.criar(Transferencia).subscribe(result=>{
      alert("Emprestimos inserida com sucesso!");
    })
  }
