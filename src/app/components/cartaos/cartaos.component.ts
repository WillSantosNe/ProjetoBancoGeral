import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoService } from '../../cartao.service';
import { Cartao } from '../../cartao';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent implements OnInit {
  formulario: any;
  titulo: string = '';

  constructor(private cartaoService: CartaoService) { }

  ngOnInit(): void {
    this.titulo = 'Novo Cartão';
    this.formulario = new FormGroup({
      id: new FormControl(null),
      numcartao: new FormControl(null),
      dataval: new FormControl(null),
      codigoseg: new FormControl(null),
      limite: new FormControl(null),
      bloqueado: new FormControl(null),

      contaId: new FormControl(null)
    });
  }

  enviarFormulario(): void {
    const cartao: Cartao = this.formulario.value;
    this.cartaoService.criar(cartao).subscribe(result => {
      alert("Cartão inserido");
    });
  }
}
