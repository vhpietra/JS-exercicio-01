
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let sum = (Number(numberOne) + Number(numberTwo))
let sub = (Number(numberOne) - Number(numberTwo))
let mult = (Number(numberOne) * Number(numberTwo))
let div = (Number(numberOne) / Number(numberTwo))
let rest = (Number(numberOne) % Number(numberTwo))

alert("A soma dos números digitados é: " + sum)
alert("A subtração dos números digitados é: " + sub)
alert("A multiplicação dos números digitados é: " + mult)
alert("A divisão dos números digitados é: " + div)
alert("O resto da divisão dos números digitados é: " + rest)

if((sum % 2) == 0) {
  alert("A soma dos dois números é par: " + sum)
} else {
  alert("A soma dos dois números é ímpar: " + sum)
}

if(Number(numberOne) == Number(numberTwo)) {
  alert("Os números inseridos são iguais!")
} else {
  alert("Os números inseridos são diferentes!")
}