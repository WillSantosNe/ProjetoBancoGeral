// Movimentacao.ts
export enum TipoMovimentacao {
    Saque,
    Deposito
}

export interface Movimentacao {
    id: number;
    tipo: TipoMovimentacao;
    valor: number;
    dataMovimentacao: Date;
}
