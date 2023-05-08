// Operadores relacionais são usados para comparação. Os operadores relacionais são ===(igual em tipo e quantidade) !==(diferente, em tipo ou quantidade), >(maior) <(menor), >=(maior ou igual), <=(menor ou igual) 

const primeiroNumero = 9
const segundoNumero = 17
const terceiroNumero = 8
const quartoNumero = -95
const quintoNumero = 148
const sextoNumero = 8


//igual === Ex:

console.log(primeiroNumero === segundoNumero) //false
console.log(quartoNumero === quintoNumero) //false
console.log(sextoNumero === terceiroNumero) //true

//diferente !== 

console.log(primeiroNumero !== segundoNumero) //true
console.log(quartoNumero !== quintoNumero) //true
console.log(sextoNumero !== terceiroNumero) //false
console.log(quartoNumero !== -95) //false


//Maior e menor => > / < <=

//Maior

console.log( quintoNumero > segundoNumero)
console.log( sextoNumero >= terceiroNumero)
console.log (segundoNumero > 100)


//Menor

console.log( quintoNumero < segundoNumero)
console.log( sextoNumero <= terceiroNumero)
console.log (segundoNumero < 100)


