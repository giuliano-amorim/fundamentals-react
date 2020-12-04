// Altere o programa anterior para mostrar no final a soma dos números

const x = 2;
const y = 6;
let soma = 0;

if (x<y) {
    for (let i = x + 1; i < y; i++) {
        soma = soma + i

    }
}

else {
for (let i = y+1; i < x; i++) {
    soma = soma + i
    }
}

console.log(soma)

