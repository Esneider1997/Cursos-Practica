// Primera pregunta 

const text = 'Hola'

/* 
//************************!  2. Tipos de datos en js ************************

//* Primitivos
typeof(undefined)   // undefined
typeof(tru)         // boolean
typeof( 1 )         // number
typeof("String")    // string
typeof( 2n )        // bigInt
typeof( Symbol(2) ) // symbol
typeof( null )      // null*

//* Objetos
typeof {}
typeof []
const set = new Set()
typeof set
const Map = new Map()
typeof Map

//* function 
typeof function () { } // 'function' --> es un objeto pero deriba del constructor de Object

//* diferencia = Los primitivos se pasan por valor y los objetos por referencia, esto quiere decir que los primitivos son inmutables. 
console.log( 1 === 1 ); // true
//* NOTA: Se compararan por su valor.
//* RunJs --> false
console.log({} === {})             // false
console.log({ a: 1 } === { a: 1 }) // false
//* Nota: La comparacion no la hace por valor, cualquier tipo de objeto se pasan por referencia. ( objet, map, Set, wepMap, Arrays ) se comparan por referencia. 
console.log( null === null );      // true
//* Nota: Es un primitivo porque es por valor

DENTRO DE POCO EN JAVASCRIP TENDREMOS NUEVOS PRIMITIVOS QUE VAN A SER LOS 'RECORD y TUPLE' Objetos y Array con estrucutas inmutables y por lo tanto sus igualdades vamos a poder comparar los valores
Record #{ x:1, y: 2 }
Tuple  #[1, 2, 3, 4]

*/

// documentacion y la especificacion son documentos distintos.

//************************!  3. QUÃ ES UN CALLBACK *************************
//* Es una funcion que le puedes pasar a otra como argumento y que se ejecuta despues que se haya completado alguna operacion
/* 
function modify(array, callback) {
    // hacer esto
    array.push('ð')
    // Despues hacer algo
    setTimeout(() => {
        callback( array ) // <== este es el arr de la funcion de debajo
    }, 1000);
}

const vegetables = ['ð ', 'ð¥', 'ð'];

modify(vegetables, function ( veget ) {  
    console.log(`He modificado el array  ${veget.length} elementos !`);
    veget.forEach(vegetales => console.log(vegetales))
});

//* Funciones de primera clase, Funciones de orden superior
//* La mayoria de cosas en javascript recibe un callback
const names = ['Pedro', 'Pinto', 'Marco']
names.forEach( name => {
    console.log( name );
});

const saludo = ['hola', 'como', 'estas']
const callback = name => console.log(name)
saludo.map( callback )

//* Metodos de array (map, forEach, find, filter, some, every, join, slice)

//** En javascript tienes que dominar los metodos de 
//* 1. forEach(), 
//* 2. map(), 
//* 3. includes(), 
//* 4. filter(), 
//* 5. some(), 
//* 6. reduce(), 
//* 6. some(), 
//* 7. every(), 
//* 8. sort(), 
//* 9. Array.from(), 10. Array.of()

// * MÃ©todos de string ( split, reverse, includes, indexOf, substring, trim )
//  
//  * charAt(num)	Permite acceder a un carÃ¡cter en concreto de una cadena. Ver ejemplo
//  * indexOf(string)	Devuelve la posiciÃ³n de la primera ocurrencia del carÃ¡cter pasado como parÃ¡metro. Ver ejemplo
//  * lastIndexOf(string)	Devuelve la posiciÃ³n de la Ãºltima ocurrencia del carÃ¡cter pasado como parÃ¡metro
//  * match()	Busca una coincidencia en una cadena y devuelve todas las coincidencias encontradas
//  * replace(cadena, sustituto)	Busca una coincidencia en una cadena y si existe, la remplaza por otra cadena pasada como parÃ¡metro
//  * search()	Busca una coincidencia en una cadena y devuelve la posiciÃ³n de la coincidencia
//  * slice()	Extrae una parte de una cadena en base a los parÃ¡metros que indiquemos como Ã­ndices de inicio y final.
//  * split()	Corta una cadena en base a un separador que pasamos como parÃ¡metro
//  * substr(inicio, longitud)	Devuelve una subcadena en base a un Ã­ndice y longitud pasados como parÃ¡metros
//  * substring(inicio, fin)	Devuelve una subcadena en base a un Ã­ndice de inicio y de final pasados como parÃ¡metros
//  * toLowerCase()	Devuelve la cadena en minÃºsculas. No la cambia.
//  * toUpperCase()	Devuelve la cadena en mayÃºsculas. No la cambia
//  * trim()	Elimina los espacios del principio y el final del String
//  * fromCharCode()	Convierte valores unicode en caracteres
//  * concat()	Une dos o mÃ¡s Strings y los devuelve concatenados en un nuevo String
//  * endsWith(cadena)	Comprueba si el String termina con los caracteres pasados por parÃ¡metro
//  * charCodeAt()	Devuelve el unicode del caracter en el Ã­ndice especificado
//  * includes(cadena)	Compruei dos cadenas son equivalentes en la configuraciÃ³n regional actual. Ver ejemplo
//  * repeat()



//* dale la vuelta a la frase de forma que la prinera palabra sea la ultima, la segunda, la prenultima, etc ... 
*/
const string = 'This is a JavaScript test ver lol jjireh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil'

function reverse(text) {  
    return text.split(' ', 4).reverse().join('');
}

reverse(string);

//* Busca en una api las 3 primeras palabras
// LIMIT_WORDS = 3
// const query  = string.split(' ', LIMIT_WORDS)
// fetch(...) 
/*
*/

//*********************! 4. COMPRUBA QUE UN OBJETO ES UN ARRAY ******************************
/* 
const number = [1, 2, 3];

//* No lo comprueba porque da object
//  console.log(typeof(number)); // --> object
//* tampoco hagas esto
//  if(number.length) { console.log('Es un array');}
//* Lo correcto seria
console.log( Array.isArray(number) );   // true
//* Lo que se hacia en su tiempo era 
Object.prototype.toString.call(number); // true 
*/

//*****************************! 5. VACIAR UN ARRAY ****************************************** */

/* 
let numbers = [1, 2, 3]
let copy = numbers;
numbers = [];
console.log(copy);

// la forma mas facil seria 
numbers.length = 0; 
//* length No solo es un Getter sino tambien un Setter donde tu puedes dar la longitud que puede 
//* tener un Array y los elementos que quedan fuera de la longitud que tu seteas son recogidos por el garbage collector

//* Tambien es valido
numbers.splice(0, numbers.length);
console.log(numbers);
//* LO QUE NO SE HARIA 
while(numbers.length) numbers.pop() 
*/

//*****************************! 5. COMPRUEBA UN NUMERO QUE ES ENTERO ****************************************** */
//* Esta bien.
/* 
console.log( Number.isInteger(1.2) );
//* Tambien esta bien pero tiene una excepciÃ³n
const isInt = num => num % 1 === 0 
console.log(isInt(1))     // true
console.log(isInt(1.5))   // false
console.log(isInt(false)) // true

// Nunca hacer esto porque va a dar falsos positivos
const failIsInt = num => {
    return !num.toString().includes('.')
}
console.log( failIsInt(1) );    // true
console.log( failIsInt(3.0) );  // true
console.log( failIsInt(1.5) );  // true
*/

//*****************************! 6. CREA UNA FUNCIÃN QUE HAGA ESTO ****************************************** */
// multiply(2)(3)

// function multiply(a){
//   function(b){
//   	return  a*b
//   }
// } 

// function multiply(a){
//     return function(b){
//         return a*b
//     }
//   }
//
// const multiply = a => b => a* b;

//*****************************! 7. CREA UNA FUNCIÃN QUE HAGA ESTO ****************************************** */
//* THIS: se refiere al dueÃ±o de la funcion, es el contexto donde se ejecuta

/*function pepito() {
  console.log( this.bar )
}
var bar = 'Global';
pepito();*/

