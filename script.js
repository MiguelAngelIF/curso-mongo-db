//entrada de los datos
var items = [3,2,7,4,45,345,34,53,6,23,87,4];
//definir la función
function busqueda(items, posicion_a_buscar){
var i = 0;
var total_elementos_arreglo = items.length;
  while(i < total_elementos_arreglo){
    if(items[i] === posicion_a_buscar){
      return items[i];
    }
    i++;
  }
}
//salida buscar en el arreglo la posicion de un elemento
var resultado = busqueda(items,7);
console.log(resultado);
