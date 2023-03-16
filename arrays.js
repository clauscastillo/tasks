
// push al frente
let originalArray = [1, 2, 3, 4, 5]; 
let newArray = new Array(originalArray.length + 1); 
newArray[0] = 0; 

for (let i = 0; i < originalArray.length; i++) {
  newArray[i+1] = originalArray[i];
}

originalArray = newArray; 
console.log(originalArray);

//pop al frente

function eliminarPrimerValor(arr) {
  const primerValor = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return primerValor;
}

const miArray = [1, 2, 3, 4, 5];
const primerValor = eliminarPrimerValor(miArray);
console.log(primerValor);
console.log(miArray); 

// insertar en

function pushFront(arr, index, value) {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = value;
}

const miArray2 = [1, 2, 3, 4, 5];
pushFront(miArray2, 2, 6);
console.log(miArray2); 

// eliminar en

function popFront(arr, index) {
  const value = arr[index];
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return value;
}

const miArray3 = [1, 2, 3, 4, 5];
const valorEliminado = popFront(miArray, 2);
console.log(valorEliminado);
console.log(miArray3); 

// pares de intercambio

function swapPairs(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

const miArray4 = [1, 2, 3, 4];
const resultado = swapPairs(miArray4);
console.log(resultado);

// eliminar duplicados

function removeDuplicates(arr) {
  const unique = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== unique[unique.length - 1]) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

const miArray5 = ["Daniel", "Daniel", "Rosa", "Rosa", "Rosa", "Mario", "Maria", "Juan", "Juan", "Juan"];
const resultado2 = removeDuplicates(miArray5);
console.log(resultado2); 







