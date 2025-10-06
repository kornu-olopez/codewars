// ? CREAR ARRAY SIMPLE
const numbersArray: number[] = [10, 3, 20, 47, 2];

// ? ACCESO DIRECTO O(1)
console.log(numbersArray[2]);

// ? RECORRER
for (let i = 0; i < numbersArray.length; i++) {
  console.log(`Indice: ${i}`, numbersArray[i]);
}

// ? INSERTAR UN ELEMENTO AL FINAL O(1)
numbersArray.push(50);

// ? INSERTAR EN MEDIO O(n) -> MUEVE AL RESTO
numbersArray.splice(2, 0, 25); // INSERTA 25 EN LA POSICION 2

// ? BORRAR
numbersArray.pop(); // ELMINIA EL ULTIMO
numbersArray.shift(); // ELIMINA EL PRIMERO

console.log(numbersArray);
