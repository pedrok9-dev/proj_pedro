export default class Receita{
    constructor(farinha = 200, agua = 134, azeite = 5, sal = 4.5,
        fermento = 3.5, acucar = 5, ovo = 56){

            this.farinha = farinha,
            this.agua = agua,
            this.azeite = azeite
            this.sal = sal
            this.fermento = fermento
            this.acucar = acucar
            this.ovo = ovo

            //peso base da receita de 408 gramas
            this.pesoBase = this.farinha + this.agua + this.azeite + this.fermento + this.acucar
            + this.ovo  
            
            this.receita = {} //varieval do tipo objeto
            this.totalPizza = 0
        }

        calcularQtdeIngredientes(){
             const fatorEscala = 1000000 / this.pesoBase

             this.receita = {
                farinha: Number((this.farinha * fatorEscala).toFixed(2)),

             }

             this.receita.farinha
        }
}