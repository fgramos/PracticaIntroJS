//Segunda Kata: Sistema Romano
/*
* Crear una función para pasar de número romanos a árabes
* Crear una función para pasar de árabes a romanos
* Hacer un validador de números romanos
*/

function arabToRoman(params) {
	
}

function romanToArab(params) {
	
}

function validateRoman(params) {
	
}

/*
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
*/