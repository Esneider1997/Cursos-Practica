function saludar( nombre ) {      
    // console.log( arguments );    // Arguments(4) ['Esneider', 40, true, 'Colombia', callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // console.log('Hola '+nombre);
    return [1, 2, 3, 4, 5];

    // Nunca se va a retornar
    console.log('Soy el codigo que esta despues del return');
}

const saludar2 = function (nombre) {  
    console.log(`Hola ${nombre}`);
}

const saludarFlacha2 = (nombre) => {
    console.log('Hola '+ nombre);
}


const retornoDeSaludar = saludar('Esneider', 40, true, 'Colombia')                
console.log({retornoDeSaludar});                          // {retornoDeSaludar: 10}

console.log(saludar());                                   // (5) [1, 2, 3, 4, 5]

/* 
saludar2('Manuel');                                       // Hola Manuel
saludarFlacha2('Esneider');                              // Hola Esneider

 */




