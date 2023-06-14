///////////////////////////////////////exemplo com for:

// console.log ("Abrir livro")

// const linhas = [["olá meu nome é fulano.", "Tenho 18 anos.", "Adoro correr.", "Adoro festa.", "E adoro ver filmes."],["olá meu nome é ciclano.", "Tenho 30 anos.", "Adoro Dormir.", "Adoro festa.", "E odeio ver filmes."], ["olá meu nome é Helenildo.", "Tenho 20 anos.", "Adoro comer.", "Odeio festa.", "E adoro ver filmes."]]

// for(let pag = 1; pag <=3; pag++){
//     console.log("Página", pag)

//     for( let i = 0; i < linhas.length; i++){
//         for(let j = 0; j < linhas[i].length; j++){
//         console.log(linhas[i][j])
//     }
// }
// }

// Exemplo para passar as páginas de um livro com for: 
// const linhas = ["olá meu nome é fulano.", "Tenho 18 anos.", "Adoro correr.", "Adoro festa.", "E adoro ver filmes."]
// const linhas2 = ["olá meu nome é ciclano.", "Tenho 30 anos.", "Adoro Dormir.", "Adoro festa.", "E odeio ver filmes."]
// const linhas3 = ["olá meu nome é Helenildo.", "Tenho 20 anos.", "Adoro comer.", "Odeio festa.", "E adoro ver filmes."]

// for(let pag = 1; pag <=1; pag++){
//     console.log("Página", pag)

  
//     for( let linha of linhas){
//         console.log("Linha", linha)
//     }
// }

// for(let pag2 = 2; pag2 <=2; pag2++){
//     console.log("Página", pag2)

//     for( let linha2 of linhas2){
//         console.log("Linha", linha2)
//     }

// }

// for(let pag3 = 3; pag3 <=3; pag3++){
//     console.log("Página", pag3)

//     for( let linha3 of linhas3){
//         console.log("Linha", linha3)
//     }

// }





// for( let i = 1; i <= 10; i++){
//     console.log(`6x${i} = ${6*i}`)
// }

// const numeros = [14, 67, 89, 15, 23]

// for(let i = 0; i < numeros.length; i++){
// 	console.log(numeros[i]);
// }

/////////////////////////////////////////////////////


// exemplo com for of

// const arrayDeNumeros = [1,2,3,5]
// const arrayDeFrutas = ["Maçã", "Uva", "Limão"]

// for( let numero of arrayDeNumeros){
//     console.log(numero)
// }


// for( let fruta of arrayDeFrutas){
//     console.log(fruta)
// }

/////////////////////////////////////////////////////

//exemplo com for in

const arrayDeNumeros = [1,2,3,5]

for( let numero in arrayDeNumeros){
    console.log(numero)// será impresso os números dos indíces dentro das arrays
    // console.log(arrayDeNumeros[numero]) // Será impresso o valor dos números dentro do array
}