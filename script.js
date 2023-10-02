var galaxies = [3, 2, 56, 3, 78, 34];

function funcionContarEstrellas(galaxies) {
  var totalStars = galaxies.reduce(function (accumulator, stars) {
    return accumulator + stars;
  }, 0); // Agregar 0 como valor inicial del acumulador
  return totalStars;
}

var resultado = funcionContarEstrellas(galaxies);

document.write("Total de estrellas en las galaxias: " + resultado + "<br>");

var i = 0;
galaxias = Array.apply(null, Array(10000)).map(function () {
  return ++i;
});
var count = 10000;
var start = new Date();
for (i = 0; i < count; i++) {
  // Llama a la función countAllStart, asegúrate de que esté definida correctamente
  // countAllStart(galaxias, 9999);
}
var miliseconds = new Date() - start;
document.write("Tiempo en ms: " + miliseconds);
