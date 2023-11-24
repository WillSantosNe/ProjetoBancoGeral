import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { EmprestimosService } from '../../emprestimos.service';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.css'

})
export class EmprestimosComponent implements OnInit {
  formulario : any;
  tituloFormulario : string = '';

  constructor(private EmprestimoService: EmprestimoService){ }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Emprestimo';
    this.formulario = new FormGroup({
      id : new FormControl(null),
      numeroConta: new FormControl(null),
      tx_juros: new FormControl(null),
      Valor_soli : new FormControl(null),
      Data_soli : new FormControl(null),
      n_parcelas : new FormControl(null),
      valor_pagar : new FormControl(null),
      })
  }
  enviarFormulario():void{
    const emprestimos: EmprestimosService = this.formulario.value;
    this.EmprestimoService.criar(emprestimos).subscribe(result=>{
      alert("Emprestimos inserida com sucesso!");
    })
  }

}
