const manzanas = [2,5,3,4,9,5,67,54];
// multiplicar cada elemento del array por 10
const arrayModificado = manzanas.map(funcionMultiplicar)

function funcionMultiplicar(manzanas){
  return manzanas * 10;
}

document.querySelector('#header').innerHTML = arrayModificado;
