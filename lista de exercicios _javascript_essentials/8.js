
// const lado1 = x;
// const lado2 = y;
// const lado3 = z;



CORRIGIR
function triangulo(x,y,z) {
if (x+y>z || y+z>x || x+z>y) {
return "Os lados formam um triangulo"
}

else if (x != y && x != z) {
  return 'O triangulo é escaleno'
  }
else if (x == y || x == z || z == y) {
  return 'O triangulo é isósceles'
  }
else {
  return 'O triangulo é equilatero'
  }
}





