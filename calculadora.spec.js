const { somar, subtrair, dividir, multiplicar } = require("./calculadora")



describe("calculadora", () => {

    describe("somar", () => {
        it("deve retornar 30 ao somar 10 e 20", () => {
            const numeroUm = 10
            const numeroDois = 20

            const resultado = somar(numeroUm, numeroDois)

            expect(resultado).toBe(30)
        })
    })
    describe("subtrair", () => {
        it("deve retornar 10 ao subtrair 20 e 10", () => {
            const numeroUm = 20
            const numeroDois = 10

            const resultado = subtrair(numeroUm, numeroDois)

            expect(resultado).toBe(10)
        })
    })
    describe("multiplicar", () => {
        it("deve retornar 10 ao multiplicar 2 e 5", () => {
            const numeroUm = 2
            const numeroDois = 5

            const resultado = multiplicar(numeroUm, numeroDois)

            expect(resultado).toBe(10)
        })
    })
    describe("dividir", () => {
        it("deve retornar 10 ao dividir 20 e 2", () => {
            const numeroUm = 20
            const numeroDois = 2

            const resultado = dividir(numeroUm, numeroDois)

            expect(resultado).toBe(10)
        })
        it("deve retornar -101 ao dividir 20 e 0", () => {
            const numeroUm = 20
            const numeroDois = 0

            const resultado = dividir(numeroUm, numeroDois)

            expect(resultado).toBe(-101)
        })
    })

})