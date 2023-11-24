// Conta.ts
// import { Agencia } from './Agencia'; 
// Importação da interface Agencia
// import { Cliente } from './Cliente';  
// Importação da interface Cliente

export enum TipoConta {
    Poupanca,
    Corrente,
    Salario
}

export interface Conta {
    id: number;
    numeroConta: string;
    tipoConta: TipoConta;
    saldo: number;
    dataAbertura: Date;

    clienteId: number;
    agenciaId: number;

    // cliente?: Cliente;
}
