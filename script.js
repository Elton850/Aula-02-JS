// const numero = Number(prompt("Digite um número:"))

// if (numero > 0) {
//     console.log ("Positivo")
// } else if (numero < 0) {
//     console.log ("Negativo")
// } else if (numero === 0) {
//     console.log("Neutro")
// } else {
//     console.log ("Valor inválido, digite um número")
// }

// Questão 01

// const numero = Number(prompt("Digite um número:"))

// if (numero > 0 && numero % 2 === 0) {
//     console.log("o número é Positivo e Par!")
// } else {
//     console.log("o número ou não é Positivo ou não é Par!")
// }

// Questão 02

// const peso = Number(prompt("Digite seu peso:"))
// const altura = Number(prompt("Digite sua altura:"))
// const imc = peso / altura**2

// if (imc < 18.5) {
//     console.log("Magreza")
// } else if ( imc >= 18.5 && imc < 25) {
//     console.log("Normal")
// } else if ( imc >= 25 && imc < 30) {
//     console.log("Sobrepeso")
// } else if ( imc >= 30 && imc < 35) {
//     console.log("Obesidade grau 1")
// } else if ( imc >= 35 && imc < 40) {
//     console.log("Obesidade grau 2")
// } else {
//     console.log("Obesidade grau 3")
// }

// console.log("IMC: " + imc)

// Questão 03
// const idade = Number(prompt("Digite sua idade:"))
// const preco = Number(prompt("Digite o preço:"))
// const preco_desconto = preco - preco*0.1

// idade >= 18 ? console.log("Preço final: " + preco_desconto) : console.log("Preço final: "+preco)

// Questão 04

// const lado1 = Number(prompt("1° Lado do Triângulo:"))
// const lado2 = Number(prompt("2° Lado do Triângulo:"))
// const lado3 = Number(prompt("3° Lado do Triângulo:"))

// if ( lado1 === lado2 && lado2 === lado3 && lado1 === lado3) {
//     console.log("Este triângulo é Equilátero")
// } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3 ) {
//     console.log("Este triângulo é Isóceles")
// } else {
//     console.log ("Este triângulo é Escaleno")
// }

// Questão 06

// const dia_da_semana = Number(prompt("Digite o dia da semana:"))

// switch (dia_da_semana) {
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Segunda-feira")
//         break
//     case 3:
//         console.log("Terça-feira")
//         break
//     case 4:
//         console.log("Quarta-feira")
//         break
//     case 5:
//         console.log("Quinta-feira")
//         break
//     case 6:
//         console.log("Sexta-feira")
//         break
//     case 7:
//         console.log("Sábado")
//         break
//     default:
//         console.log("Digite um número de 1 a 7")
// }

// Questão 07

const menu = Number(prompt("1 - Área do Triângulo | 2 - Área do Retângulo | 3 - Volume do Cubo | 4 - Área do Círculo | 5 - Sair"))

switch (menu) {
    case 1:
        const base_triangulo = Number(prompt("Digite a base do triângulo:"))
        const altura_triangulo = Number(prompt("Digite a altura do triângulo:"))
        const resultado_triangulo = (base_triangulo * altura_triangulo)/2
        console.log("A área do triângulo é de "+resultado_triangulo)
        break
    case 2:
        const base_retangulo = Number(prompt("Digite a base do retângulo:"))
        const altura_retangulo = Number(prompt("Digite a altura do retângulo:"))
        const resultado_retangulo = base_retangulo * altura_retangulo
        console.log("A área do retângulo é de "+resultado_retangulo) 
        break
    case 3:
        const area_cubo = Number(prompt("Digite a área do cubo:"))
        const resultado_cubo = area_cubo**3
        console.log("O volume do cubo é de "+resultado_cubo)
        break
    case 4:
        const raio = Number(prompt("Digite o raio do circulo:"))
        console.log(`A área do circulo é de: ${3.14 * raio**2}`)
        break
    case 5:
        console.log("Você saiu com exito")
        break
    }