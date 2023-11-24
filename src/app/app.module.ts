import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CartaosService } from './cartaos.service';
import { CartaosComponent } from './components/cartaos/cartaos.component';

import { ClientesService } from './clientes.service';
import { ClientesComponent } from './components/clientes/clientes.component';

import { ContasService } from './contas.service';
import { ContasComponent } from './components/contas/contas.component';

import { SeguroService } from './seguros.service';
import { SegurosComponent } from './components/seguros/seguros.component';

import { TransferenciasService } from './transferencias.service';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';

import { MovimentacaoService } from './movimentacaos.service';
import { MovimentacaosComponent } from './components/movimentacaos/movimentacaos.component';

import { EmprestimosService } from './emprestimos.service';
import { EmprestimosComponent } from './components/emprestimos/emprestimos.component';

import { InvestimentosService } from './investimentos.service';
import { InvestimentosComponent } from './components/investimentos/investimentos.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    CartaosService,
    ClientesService,
    ContasService,
    EmprestimosService,
    InvestimentosService,
    SeguroService,
    TransferenciasService
  ]
})

export class AppModule { }


