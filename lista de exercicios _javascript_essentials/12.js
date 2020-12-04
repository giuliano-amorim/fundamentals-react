// Faça um programa que imprima na tela apenas 
// os números ímpares entre 1 e 50.
exibirImpar(50)
 function exibirImpar(numeros) {
     for (let i = 0; i <= numeros; i++) {
         if (i % 2 === 0) {
             console.log("")
         } else {
             console.log(i)
             }
        }
     }
