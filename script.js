const manzanas = [2, 5, 3, 4, 9, 5, 67, 54];

// Multiplicar cada elemento del array por 10
const arrayModificado = manzanas.map(funcionMultiplicar);

function funcionMultiplicar(manzana) {
  return manzana * 10;
}

// Crear una cadena de texto con los valores modificados
const resultado = arrayModificado.join(', ');

// Asignar la cadena al elemento con el id "header"
document.querySelector('#header').textContent = resultado;

const nums = ["1","2","3","4","5"];
const resultadoContainer = nums.forEach(() => console.log("Un elemento."));
const resultado2 = resultadoContainer.join(', ');
document.querySelector('#resultado2').textContent = resultado2;
