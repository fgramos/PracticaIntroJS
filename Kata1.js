//Primera Kata: FooBarQuix

function FooBarQuix(paramNumber) {
	let respuesta = "";
	if (typeof paramNumber !== "number") {
		return paramNumber + " No es un numero, es " + typeof paramNumber;
	} else if (paramNumber > 100 || paramNumber < 1) {
		return "Numero " + paramNumber + " fuera del intervalo [1,100] ";
	} else {
		paramNumber = parseInt(paramNumber.toString()); //si es float lo paso a int
		if (paramNumber % 3 === 0) {
			respuesta += "Foo";
		}
		if (paramNumber % 5 === 0) {
			respuesta += "Bar";
		}
		if (paramNumber % 7 === 0) {
			respuesta += "Quix";
		}

		let myArray = paramNumber.toString();

		for (let i = 0; i < myArray.length; i++) {
			if (myArray[i] === "3") {
				respuesta += "Foo";
			}
			if (myArray[i] === "5") {
				respuesta += "Bar";
			}
			if (myArray[i] === "7") {
				respuesta += "Quix";
			}
		}

		if (respuesta === "") {
			respuesta = paramNumber.toString();
		}

		return respuesta;
	}
}

console.log(FooBarQuix("10"));
console.log(FooBarQuix("ABD"));
console.log(FooBarQuix(true));
console.log(FooBarQuix(1 - 0.123456));
console.log(FooBarQuix(10.23));
console.log(FooBarQuix(1e1));
console.log(FooBarQuix(1e2 - 0.123456));
console.log(FooBarQuix(10));

console.log(FooBarQuix(1));
console.log(FooBarQuix(2));
console.log(FooBarQuix(3));
console.log(FooBarQuix(4));
console.log(FooBarQuix(5));
console.log(FooBarQuix(6));
console.log(FooBarQuix(7));
console.log(FooBarQuix(8));
console.log(FooBarQuix(9));
console.log(FooBarQuix(10));
console.log(FooBarQuix(13));
console.log(FooBarQuix(15));
console.log(FooBarQuix(21));
console.log(FooBarQuix(33));
console.log(FooBarQuix(51));
console.log(FooBarQuix(53));
console.log(FooBarQuix(75));

console.log(FooBarQuix(11));
console.log(FooBarQuix(13));
console.log(FooBarQuix(17));
console.log(FooBarQuix(19));
console.log(FooBarQuix(29));
console.log(FooBarQuix(41));
console.log(FooBarQuix(99));
console.log(FooBarQuix(100));
