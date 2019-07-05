//Segunda Kata: Sistema Romano
/*
* todo Crear una función para pasar de número romanos a árabes
*/

function arabToRoman(params) {
	if (params > 3999 || params < 1 ) {
		return "";
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
	if (m100s === 4 && m500s === 0){		//400
		romanNumber+="CD"
	} else if (m100s === 4 && m500s === 1){ //900
		romanNumber+="CM"
	} else {
		romanNumber+='D'.repeat(m500s); 	//500 * n
		romanNumber+='C'.repeat(m100s); 	//100 * n
	}
	if (m10s === 4 && m50s === 0){ 			//40
		romanNumber+="XL"
	} else if (m10s === 4 && m50s === 1){	//90
		romanNumber+="XC"
	} else {		
		romanNumber+='L'.repeat(m50s);		//50 * n
		romanNumber+='X'.repeat(m10s);		//10 * n
	}
	if (m1s === 4 && m5s === 0){			//4
		romanNumber+="IV"
	} else if (m1s === 4 && m5s === 1){		//9
		romanNumber+="IX"
	} else {
		romanNumber+='V'.repeat(m5s);		//5 * n
		romanNumber+='I'.repeat(m1s);		//1 * n
	}
	//console.log("Nº "+params+" : "+ romanNumber);
	return romanNumber;
}

function validateRoman(params) {
	let varM=0, varD=0, varC=0, varL=0, varX=0, varV=0, varI=0;
	let itsOk = true;
	let repetidos = 1;
	let strError = "";
	
	// Compruebo que todos son nºs romanos y los cuento.
	for (let i=0; i < (params.length) ; i++){
		switch (params[i]) {
			case "M":
				varM++;
				break;
			case "D":
				varD++;
				break;
			case "C":
				varC++;
				break;
			case "L":
				varL++;
				break;
			case "X":
				varX++;
				break;
			case "V":
				varV++;
				break;
			case "I":
				varI++;
				break;
			default:
				itsOk = false;
				strError += " Existe un número NO ROMANO ";
				break;
		}
	}

	// * Los símbolos V, L y D no pueden repetirse.
	if (varV > 1 || varL > 1 || varD > 1 ) {
		itsOk=false;
		strError +=
			"Error: Los símbolos V, L y D no pueden repetirse.";
	}

	// * Los símbolos I, X, C y M se pueden repetir hasta tres veces.
	if (varI > 3 || varX > 4 || varC > 4 || varM > 4) {
		itsOk = false;
		strError +=
			"Error: Los símbolos I, X, C y M se pueden repetir hasta tres veces.";
	}

	for (let i = 0; i < params.length - 1; i++) {
		// * Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
		if (params.charAt(i) === "V") {
			//busco caracteres mayores que V [X,L,C,D,M] en el resto de la cadena
			if ( params.includes("X", i) 
			  || params.includes("L", i) 
			  || params.includes("C", i) 
			  || params.includes("D", i) 
			  || params.includes("M", i) ) {
				itsOk = false;
				strError +=	params.charAt(i) + " Tiene una X-L-C-D-M a su derecha.";
				break;
			} 
		}
		if (params.charAt(i) === "L") {
			//busco caracteres mayores que L [C,D,M] en el resto de la cadena
			if ( params.includes("C", i) 
			  || params.includes("D", i) 
			  || params.includes("M", i) ) {
				itsOk = false;
				strError +=	params.charAt(i) + " Tiene una C-D-M a su derecha.";
				break;
			} 
		}
		if (params.charAt(i) === "D") {
			//busco caracteres mayores que D [M] en el resto de la cadena
			if ( params.includes("M", i) ) {
				itsOk = false;
				strError +=	params.charAt(i) + " Tiene una M a su derecha.";
				break;
			} 
		}
		//Los símbolos I, X y C  solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
		if (params.charAt(i) === "I") {
			//busco caracteres mayores que I [L,C,D,M] en el resto de la cadena
			if ( params.includes("L", i) 
			  || params.includes("C", i)
			  || params.includes("D", i)
			  || params.includes("M", i)) {
				itsOk = false;
				strError +=	params.charAt(i) + " Tiene una L-C-D-M a su derecha. ";
				break;
			} 
		}
		if (params.charAt(i) === "X") {
			//busco caracteres mayores que X [D,M] en el resto de la cadena
			if ( params.includes("D", i)
			  || params.includes("M", i)) {
				itsOk = false;
				strError +=	params.charAt(i) + " Tiene una D-M a su derecha. ";
				break;
			} 
		}
		//if (params.charAt(i) === "C") {
			//busco caracteres mayores que C [] en el resto de la cadena
		//	null;
		//} 
	}

	// * Los símbolos I, X, C y M se pueden repetir hasta tres veces. (Consecutivas)
	repetidos=1;
	for (let i = 0; i < params.length-1; i++) {
		if ( params.charAt(i) == params.charAt(i + 1) ) {
			repetidos++;
			if (repetidos > 3){
				itsOk = false;
				strError +=	"El Numero Romano "+params.charAt(i)+" está repetido "+	repetidos +	" veces consecutivas.";
				break;
			}
		} else {
			repetidos=1;
		}
	}

	if (! itsOk) {
	//	console.log(" "+params+" "+strError);
	}
	return itsOk;
}

/*### Reglas

Sólo se contemplan números entre el 1 y el 3999

* Los símbolos I, X, C y M se pueden repetir hasta tres veces.
* Los símbolos V, L y D no pueden repetirse.  
* Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
* Los símbolos I, X y C se restan si están a la izquierda de otro mayor y solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
* I se resta de V y X
* X se resta de L y C
* C se resta de D y M
* Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
*/

// function romanToArab(params) {
// 	let results=0;
// 	if (validateRoman(params)){
// 		for (let i = 0; i < params.length; i++) {

// 			if (params.charAt(i) === 'M'){
// 				results+=1000;
// 			}

// 			if (params.charAt(i) === "D") {
// 				results += 500;
// 			}

// 			if (params.charAt(i) === "C") {
// 				if(params.charAt(i+1) === "M") {
// 					results += 900;
// 					i+=2;
// 				} else if (params.charAt(i+1) === "D") {
// 					results += 400;
// 					i+=2;
// 				} else  {
// 					results += 100;
// 				}
// 			}

// 			if (params.charAt(i) === "L") {
// 				results += 50;
// 			}

// 			if (params.charAt(i) === "X") {
// 				if (params.charAt(i + 1) === "C") {
// 					results += 90;
// 					i += 2;
// 				} else if (params.charAt(i + 1) === "L") {
// 					results += 40;
// 					i += 2;
// 				} else {
// 					results += 10;
// 				}
// 			}

// 			if (params.charAt(i) === "V") {
// 				results += 5;
// 			}

// 			if (params.charAt(i) === "I") {
// 				if (params.charAt(i + 1) === "X") {
// 					results += 9;
// 					i += 2;
// 				} else if (params.charAt(i + 1) === "V") {
// 					results += 4;
// 					i += 2;
// 				} else {
// 					results += 1;
// 				}
// 			}
// 		}
// 	}
// 	return results;
// }

function romanToArab(params) {
	let results2 = 0;
	if (validateRoman(params)) {
		for (let i = 0; i < params.length; i++) {
			switch (params.charAt(i)) {
				case "M":
					results2 += 1000;
					break;
				case "D":
					results2 += 500;
					break;
				case "C":
					if (params.charAt(i+1) === "M") {
						results2 += 900;
						i += 1;
					} else if (params.charAt(i+1) === "D") {
						results2 += 400;
						i += 1;
					} else {
						results2 += 100;
					}
					break;
				case "L":
					results2 += 50;
					break;
				case "X":
					if (params.charAt(i+1) === "C") {
						results2 += 90;
						i += 1;
					} else if (params.charAt(i+1) === "L") {
						results2 += 40;
						i += 1;
					} else {
						results2 += 10;
					}
					break;
				case "V":
					results2 += 5;
					break;
				case "I":
					if (params.charAt(i+1) === "X") {
						results2 += 9;
						i += 1;
					} else if (params.charAt(i+1) === "V") {
						results2 += 4;
						i += 1;
					} else {
						results2 += 1;
					}
					break;
				// default:
				// 	break;
			}
		}
	}
	return results2;
}

//PRUEBAS

for (let i=1;i<4000;i++){
	//console.log(i + " " + romanToArab(arabToRoman(i))+ " " +arabToRoman(i));
	if (i != romanToArab(arabToRoman(i)) ){
		console.log(i + " ERROR " + romanToArab(arabToRoman(i))+ " ERROR " +arabToRoman(i));
	}
}

