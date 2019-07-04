//Segunda Kata: Sistema Romano
/*
* todo Crear una función para pasar de número romanos a árabes
*
* todo Hacer un validador de números romanos
*/

function arabToRoman(params) {
	if (params > 3999 || params < 1 ) {
		return null;
	}
	let m1000s, m500s, m100s, m50s, m10s, m5s, m1s, resto, romanNumber = "";
	m1000s = Math.trunc(params/1000);
	resto = params%1000;
	// console.log("M : "+ m1000s+ " y resto "+ resto);
	m500s = Math.trunc(resto/500);
	resto = resto%500;
	// console.log("D : "+ m500s+ " y resto "+ resto);
	m100s = Math.trunc(resto/100);
	resto = resto%100;
	// console.log("C : "+ m100s+ " y resto "+ resto);
	m50s = Math.trunc(resto/50);
	resto = resto%50;
	// console.log("L : "+ m50s+ " y resto "+ resto);
	m10s = Math.trunc(resto/10);
	resto = resto%10;
	// console.log("X : "+ m10s+ " y resto "+ resto);
	m5s = Math.trunc(resto/5);
	resto = resto%5;
	// console.log("V : "+ m5s+ " y resto "+ resto);
	m1s = resto;
	//console.log("I : "+ m1s);
	//building roman number
	romanNumber+='M'.repeat(m1000s);
	if (m100s === 4 && m500s === 0){
		romanNumber+="CD"
	} else if (m100s === 4 && m500s === 1){
		romanNumber+="CM"
	} else {
		romanNumber+='D'.repeat(m500s);
		romanNumber+='C'.repeat(m100s);
	}
	if (m10s === 4 && m50s === 0){
		romanNumber+="XL"
	} else if (m10s === 4 && m50s === 1){
		romanNumber+="XC"
	} else {
		romanNumber+='L'.repeat(m50s);
		romanNumber+='X'.repeat(m10s);
	}
	if (m1s === 4 && m5s === 0){
		romanNumber+="IV"
	} else if (m1s === 4 && m5s === 1){
		romanNumber+="IX"
	} else {
		romanNumber+='V'.repeat(m5s);
		romanNumber+='I'.repeat(m1s);
	}
	//console.log("Nº "+params+" : "+ romanNumber);
	return romanNumber;
}

//Pruebas
console.log(arabToRoman(2019));
console.log(arabToRoman(1492));
console.log(arabToRoman(1898));
console.log(arabToRoman(1912));
console.log(arabToRoman(3999));
console.log(arabToRoman(1));
console.log(arabToRoman(4));
console.log(arabToRoman(9));
console.log(arabToRoman(10));
console.log(arabToRoman(49));
console.log(arabToRoman(99));
console.log(arabToRoman(100));
console.log(arabToRoman(500));
console.log(arabToRoman(1000));


function romanToArab(params) {
	return null;
}

function validateRoman(params) {
	return null;
}
