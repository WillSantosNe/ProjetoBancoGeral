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
import { EmprestimosService } from './emprestimos.service';
import { InvestimentosService } from './investimentos.service';

