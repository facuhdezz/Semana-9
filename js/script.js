// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "go lang", //Cambiar g a mayusculas luego
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  function filtrarString(arr){
    if(typeof arr === "string"){
      return true;
    } else {
      return false;
    }
  }

  let arrayFiltrado = strangeArray.filter(filtrarString);
  
  // Hice la función de forma tal que pase las primeras letras de los strings que están en
  // minúsculas a mayúsculas, haga el ordenamiento alfabético y luego las pase a minúsculas
  // nuevamente como estaban originalmente en el arreglo.

  function ordenAlf(arr){
    let tipo = /^[a-z]/;
    const id = " arregloNuevo";
    let arregloOrdenado = []

    arr.forEach((element) => {
      if (tipo.test(element)){
        let primerLetra = element[0].toUpperCase();
        console.log(primerLetra);
        let restoDelElemento = element.slice(1);
        console.log(restoDelElemento);
        let elementoNuevo = primerLetra + restoDelElemento + id;
        console.log(elementoNuevo);
        delete(arr[arr.indexOf(element)]);
        arr.push(elementoNuevo);
        console.log(arr);
      }
    })
    arr.sort()
    arr.forEach((element) => {
      let ultimos13 = element.slice(-13);
      arregloOrdenado.push(element);
      console.log(arregloOrdenado);
      if(id === ultimos13){
        let e2 = element.slice(0, -13);
        console.log(e2);
        let primerLetra = e2[0].toLowerCase();
        console.log(primerLetra);
        let restoDelElemento = e2.slice(1);
        console.log(restoDelElemento);
        let elementoNuevo = primerLetra + restoDelElemento;
        console.log(elementoNuevo);
        delete(arregloOrdenado[arregloOrdenado.indexOf(element)]);
        arregloOrdenado.push(elementoNuevo);
      }
    })
    showList(arregloOrdenado);
  }
  //console.log(ordenAlf(arrayFiltrado));
  ordenAlf(arrayFiltrado);
  
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
});
