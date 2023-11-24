
export enum TipoSeguro {
    Vida,
    Residencial,
    Veiculo
}

export interface Seguro {
    id?: number;
    tipo?: TipoSeguro;
    valorCoberto?: number;
    premio?: number;
    dataInicio?: Date;
    dataFim?: Date;

    clienteId?: number;
}
