console.log("Cata 1: FooBarQuix");

function FooBarQuix(paramNumber) {
    let respuesta = "";
    if (typeof paramNumber !== "number") {
        return paramNumber + " No es un numero, es " + typeof paramNumber;
    } else if (paramNumber>100 || paramNumber < 1) {
        return "Numero "+paramNumber+" fuera del intervalo [1,100] ";
    } else {
        paramNumber = parseInt(paramNumber.toString()); //si es float lo paso a int
        if ( paramNumber%3 === 0 ){
            respuesta+="Foo";
        }
        if (paramNumber % 5 === 0) {
            respuesta += "Bar";
        }
        if (paramNumber % 7 === 0) {
            respuesta += "Quix";
        }
        if (paramNumber.toString()[0] === "3") { respuesta += "Foo";}
        if (paramNumber.toString()[0] === "5") { respuesta += "Bar"; }
        if (paramNumber.toString()[0] === "7") { respuesta += "Quix"; }
        return respuesta;
    }
}

/*
console.log(FooBarQuix("10"));
console.log(FooBarQuix("ABD"));
console.log(FooBarQuix(true));
console.log(FooBarQuix(1e0 - .123456));
console.log(FooBarQuix(10.23));
console.log(FooBarQuix(1e1));
console.log(FooBarQuix(1e2-.123456));
console.log(FooBarQuix(10));
*/
console.log(FooBarQuix(3));
console.log(FooBarQuix(5));
console.log(FooBarQuix(7));