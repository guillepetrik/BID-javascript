const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
/*
    El primer log muestra Tesla, pues es el primer elemento del arreglo cars.
    el segundo log imprime Mercedes ya que se escribio un espacio seguido de la ",", esto indica que se omite esa posicion.
*/






const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

/* 
    El primer log arrojara un error pues no se puede acceder a name directamente sin desectructurarlo.
    el segundo log imprimiria (si el codigo no hubiera dejado de funionar por el log anterior) el nombre del diccionario, que esta guardada en una nueva constante other name.
*/






const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

/*
    el primer log imprime la cadena 12345.
    el segundo log no deberia imprimir nada pues no hay un objeto password dentro de person, si no que esta definido fuera.
*/






const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

/*
    el primer log imprime false, pues el numero 2 no es igual a 5.
    el segundo log imprime  true, pues 2 es igual a 2.
*/




const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/*
    el primer log accede al sting: value.
    el segundo log imprime el array completo.
    el tercer log imprime solo el primer elemento del array.
    el ultimo log  imprime el segundo elemento del array.
*/