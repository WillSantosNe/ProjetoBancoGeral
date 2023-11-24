import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Investimento } from '../../Investimento';
import { FormControl, FormGroup } from '@angular/forms';
import { InvestimentoService } from '../../investimentos.service';



@Component({
  selector: 'app-investimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investimentos.component.html',
  styleUrl: './investimentos.component.css'
})
export class InvestimentosComponent implements OnInit{
  formulario : any;
  titulo : string = '';

  constructor(private investimentoService: InvestimentoService){ }

  ngOnInit(): void{
    this.titulo = 'Novo Investimento';
    this.formulario = new FormGroup({
     id : new FormControl(null)
     valorini : new FormControl(null)
     datainvest : new FormControl(null)
     rentabilidade : new FormControl(null)
     dataresgate : new FormControl(null)
     taxa : new FormControl(null)

     tipoinvestimento : new FormControl(null)

     contaId : new FormControl(null)
    })
  }
  enviarFormulario():void{
    const investimento : Investimento = this.formulario.value;
    this.investimentoService.criar(investimento).subscribe(result =>{alert("Investimento inserido")})
  }

}
