// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                      Até 5 Kg           Acima de 5 Kg
// Morango         R$ 7,50 por Kg          R$ 6,20 por Kg
// Maçã            R$ 5,80 por Kg          R$ 4,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, 
// receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos 
// e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

// C1 : quantidade de morango
// C2 : quantidade de maças
// v : valor

// condicionais:
// c1 || c2 < 5, 
// return v = 7,5*c1 + 5,8*c2

// c1 || c2 > 5 && c1 || c2 <=8 && v<=25
// return

// if (c1>8 || c2>8 || v>25) {
//     console.log(v=)
// }