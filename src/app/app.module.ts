import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ContasService } from './contas.service';
import { ContasComponent } from './components/contas/contas.component';

import { SeguroService } from './seguros.service';
import { SegurosComponent } from './components/seguros/seguros.component';

import {}
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
    ContasService,
    SeguroService
  ]
})
export class AppModule { }

