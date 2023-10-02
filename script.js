const numeros = [2,5,3,4,9,5,67,54];
// multiplicar cada elemento del array por 10
const arrayModificado = numeros.map(funcionMultiplicar)

function funcionMultiplicar(numero){
  return numero * 10;
}

document.querySelector('#header').innerHTML = arrayModificado;
