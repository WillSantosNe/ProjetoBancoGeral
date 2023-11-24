export enum TipoInvestimento{
    CDB,
    TesouroDireto,
    FundoImobiliario
}

export interface Investimento{
    id?: number;
    valorini?: number;
    datainvest?: Date;
    rentabilidade?: number;
    dataresgate?: Date;
    taxa?: number;

    tipoinvestimento?: TipoInvestimento;

    contaId?: number;

}

