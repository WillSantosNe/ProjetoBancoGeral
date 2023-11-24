import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  formulario : any;
  tituloFormulario : string = '';

  constructor(private ClienteService: ClienteService){ }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Conta';
    this.formulario = new FormGroup({
      id : new FormControl(null),
      CPF : new FormControl(null),
      Name : new FormControl(null),
      DataNascimento : new FormControl(null),
      Email : new FormControl(null),
      Telefone : new FormControl(null),
      
      })
  }
  enviarFormulario():void{
    const Cliente: ClienteService = this.formulario.value;
    this.ClienteService.criar(Cliente).subscribe(result=>{
      alert("Emprestimos inserida com sucesso!");
    })
