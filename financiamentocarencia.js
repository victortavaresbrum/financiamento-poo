import { Financiamento } from "./financiamento";
import {Parcela} from "./parcelas";

class FinanciamentoCarencia extends Financiamento{
    #carencia;
    #taxaJuros;
    #parcelas= [];
    constructor(valor,entrada,taxaJuros,prazo,carencia){
        super(valor,entrada,taxaJuros,prazo);
        this.#taxaJuros = taxaJuros;
        this.#parcelas = super.getParcelas();
        this.#carencia = carencia;
    }

    calcParcelasMensais(){
        let saldo = this.#parcelas[0].getSaldo();
        for (let i = 1; i <this.#carencia_+1; i++;){
            const numero = this.#parcelas.length;
        }
    }
}