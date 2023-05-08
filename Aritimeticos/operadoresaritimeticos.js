let primeiroNumero = Number(prompt("Digite um número"))
let segundoNumero = Number(prompt("Digite outro número"))

// soma, soma as duas variáveis
let soma = primeiroNumero + segundoNumero
console.log("Soma é:",soma)

// subtração, subtrái as duas variáveis
let subtracao = primeiroNumero - segundoNumero
console.log("Subtração é:",subtracao)

// multiplicação, multiplica as duas variáveis
let multiplicacao = primeiroNumero * segundoNumero
console.log("Multiplicação é:",multiplicacao)

// divisão, divide as duas variáveis
let divisao = primeiroNumero / segundoNumero
console.log("Divisão é:",divisao)

// expoente, ele o a primeira variável pela segunda
let expoente = primeiroNumero ** segundoNumero
console.log("Expoente é:",expoente)

// módulo, mostra o resto da divisão. Ex: 17 / 7 = 4
let modulo = primeiroNumero % segundoNumero
console.log("Módulo é:",modulo)

//-------------------------------------------------------------------


//Como atribuir um valor a outra variável sem criar outra variável e ao mesmo tempo atribuir o valor dessa variável a outra? 

//Sem esse método se faz assim:
let a = 6
let b = 20
let soma1 = a + b // criamos outra variável para fazer essa conta
console.log(soma1)

//Agora com o metodo:

//Soma
let a1 = 6
let b1 = 20
b1 += a1 //Resultado: 26
console.log("Soma é:", b1) //Soma guardando em b o valor de a, sem criar uma variável

//Subtração
b1 -= a1 //Resultado: 20
console.log("Subtração é: ", b1)

//Multiplicação
b1 *= a1 //Resultado: 120
console.log("Multiplicação é: ", b1)

//Divisão
b1 /= a1 //Resultado: 20
console.log("Divisão é: ", b1)

//Expoente
b1 **= a1 //Resultado: 64000000
console.log("Expoente é: ", b1)


//Módulo
b1 %= a1 //Resultado: 4
console.log("Módulo é: ", b1)


//Aqui ocorreu um processo onde o valor da soma foi pego e armazenado em b, depois disso a subtração pegou b e subtraiu o a do b resultante da soma. no caso a soma foi 6 + 20 = 26, b armazenou 26 e subtraiu os 26 na subtração por 6, o que gerou o resultado 20, e assim se repetiu até a última conta.


//--------------------------------------------------------------


//Incremento e decremento 

//Uma maneira mais simples de adiconar +1 em uma variável. Ex:

//Sem o incremento fica assim:

let a2 = 6
let b2 = 20
let soma3 = a2 + 1

//Com o incremento e decremento é mais simples. Podemos fazer assim:

//Incremento
a1++
console.log("Resultado:",a1) //Dessa maneira acrecentamos +1 em a2, ou seja a2 = 7

//Decremento
b2-- 
console.log("Resultado:",b2) //Dessa maneira acrecentamos -1 em b2, ou seja b2 = 19
