export default class Cpf {
    private FATOR_DIGIT_1 = 10
    private FATOR_DIGIT_2 = 11

    private value: string

    constructor(cpf: string) {
        if(!this.validate(cpf)) throw new Error("CPF Inválido")
        this.value = cpf
    }

    getValue() {
        return this.value
    }

    private validate(cpf: string) {
        cpf = this.clearCPF(cpf)

        if (!cpf) return false
        if (this.isValidLength(cpf)) return false
        if (this.notRepetableDigit(cpf)) return false

        const digito1  = this.calculateCheckDigit(cpf, this.FATOR_DIGIT_1)
        const digito2  = this.calculateCheckDigit(cpf, this.FATOR_DIGIT_2)
        const extractDigits  = this.extractCheckDigit(cpf)
        const lastDigits  = `${digito1}${digito2}`

        return lastDigits == extractDigits
    }

    private isValidLength(cpf: string){
        return cpf.length < 11
    }

    private notRepetableDigit(cpf: string) {
        const [firstDigit] = cpf;
        return [...cpf].every(digit => digit === firstDigit);
    }

    private calculateCheckDigit(cpf: string, factor: number) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1) total += parseInt(digit) * factor--;
        }
        const rest = total%11;
        return (rest < 2) ? 0 : (11 - rest);
    }

    private extractCheckDigit(cpf: string) {
        return cpf.slice(-2);
    }

    private clearCPF(cpf: string) {
        return cpf
            .replace('.','')
            .replace('.','')
            .replace('-','')
            .replace(" ","");
    }


}

