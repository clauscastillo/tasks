// Eliminar espacios
function removeSpaces(str) {
    return str.replace(/\s/g, '');
  }

  const miCadena = "Pl ayTha tF u nkyM usi c";
  const resultado = removeSpaces(miCadena);
  console.log(resultado); 

// Obtener dígitos

function getNumberFromString(str) {
    const digitString = str.replace(/\D/g, '');
    return parseInt(digitString);
  }

const miCadena2 = "0s1a3y5w7h9a2t4? 6! 8? 0";
const resultado2 = getNumberFromString(miCadena2);
console.log(resultado2);

// Acronimos

function getAcronym(str) {
    const words = str.split(' ');
    const acronym = words.map(word => word.charAt(0).toUpperCase()).join('');
    return acronym;
  }

const miCadena3 = "no hay almuerzo gratis. Debes pagar por tu comida";
const resultado3 = getAcronym(miCadena3);
console.log(resultado3); // imprime "NHAG-DPPTC"

const otraCadena = "En vivo desde Nueva York, es sábado por la noche!";
const otroResultado = getAcronym(otraCadena);
console.log(otroResultado); 

// Contar no espacios

function countCharacters(str) {
    const noSpaces = str.replace(/\s/g, '');
    return noSpaces.length;
  }

  
const miCadena4 = "Amor, me estás volviendo loca";
const resultado4 = countCharacters(miCadena4);
console.log(resultado4);

// Quitar cadenas mas cortas

function removeShortStrings(arr, length) {
    const filteredArr = arr.filter(str => str.length >= length);
    return filteredArr;
  }

const miMatriz = ["hola", "adiós", "buenos días", "buenas noches"];
const longitud = 6;
const resultado5 = removeShortStrings(miMatriz, longitud);
console.log(resultado5);
  
  
  
  