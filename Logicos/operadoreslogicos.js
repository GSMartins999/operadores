// Operadores lógicos &&(só mostra valores verdadeiros sem ambos os lados forem true), ||(Só mostra valores verdadeiros se ambos os lados forem false), !(Nega os valores).

const valor1 = true
const valor2 = false
const valor3 = true
const valor4 = true
const valor5 = false

// &&(só mostra valores verdadeiros sem ambos os lados forem true).
console.log("Os valores são:", valor1 && valor5) //false
console.log("Os valores são:", valor3 && valor4) //true
console.log("Os valores são:", valor2 && valor4) //false
console.log("Os valores são:", valor2 && valor5) //false

// || (Só mostra valores verdadeiros se ambos os lados forem false)
console.log("Os valores são:", valor1 || valor5) //true
console.log("Os valores são:", valor3 || valor4) //true
console.log("Os valores são:", valor2 || valor4) //true
console.log("Os valores são:", valor2 || valor5) //false

//! (Nega os valores)

console.log("Os valores são:", !valor1) //false
console.log("Os valores são:", !valor2) //true
console.log("Os valores são:", !valor3) //false
console.log("Os valores são:", !valor4) //false
console.log("Os valores são:", !valor5) //true















