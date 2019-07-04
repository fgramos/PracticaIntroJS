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
/*

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
*/


function romanToArab(params) {
	return true;
}

function validateRoman(params) {
	let varM=0, varD=0, varC=0, varL=0, varX=0, varV=0, varI=0;
	let itsOk = true;
	let repetidos = 1;
	let strError = "";

	/* REGLAS
* Sólo se contemplan números entre el 1 y el 3999
* Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
* Los símbolos I, X y C se restan si están a la izquierda de otro mayor y
* I se resta de V y X
* X se resta de L y C
* C se resta de D y M


*/
	// * Los símbolos V, L y D no pueden repetirse.
	if (varV > 1 || varL > 1 || varD > 1 ) {
		itsOk=false;
		strError += " Hay mas de un V ó L ó D";
	}

	// * Los símbolos I, X, C y M se pueden repetir hasta tres veces.
	for (let i=0; i < (params.length - 1) ; i++){
		if (params.charAt(i)===params.charAt(i+1)){
			repetidos++;
			if (repetidos > 3 ) {
				itsOk=false;
				strError += " Hay mas de 3 repetidos de "+params.charAt(i) ;
				break;
			}
		}	else {
			repetidos = 1;
		}
	}


	for (let i=0; i < (params.length - 1) ; i++) {
		//Los símbolos I, X y C  solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
		if (params.charAt(i) === "I"){
			if ( !(params.charAt(i+1) === "I"
			 	|| params.charAt(i+1) === "V"
			 	|| params.charAt(i+1) === "X")) {
				itsOk=false;
				strError += "C1: \""+params.charAt(i) +"\" no puede ir delante de \""+ params.charAt(i+1)+ "\".";
				break;
			}
		}
		if (params.charAt(i) === "X"){
			if ( !(params.charAt(i+1) === "X"
				|| params.charAt(i+1) === "L"
				|| params.charAt(i+1) === "C"
				|| params.charAt(i+1) === "I"	//caso especial mal enunciado
				|| params.charAt(i+1) === "V"	//caso especial mal enunciado
				)) {
				itsOk=false;
				strError += " C2: \""+params.charAt(i) +"\" no puede ir delante de \""+ params.charAt(i+1)+ "\".";
				break;
			}
		}
		if (params.charAt(i) === "C"){
			if ( !(params.charAt(i+1) === "I"
				|| params.charAt(i+1) === "V"
				|| params.charAt(i+1) === "X"
				|| params.charAt(i+1) === "L"
				|| params.charAt(i+1) === "C"
				|| params.charAt(i+1) === "D"
				|| params.charAt(i+1) === "M")) {
				itsOk=false;
				strError += " C3: \""+params.charAt(i) +"\" no puede ir delante de \""+ params.charAt(i+1)+ "\".";
				break;
			}
		}
		// Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
		if (params.charAt(i) === "V"){
			if ( !(params.charAt(i+1) === "I")) {
				itsOk=false;
				strError += " C4: \""+params.charAt(i) +"\" no puede ir delante de \""+ params.charAt(i+1)+ "\".";
				break;
			}
		}
		if (params.charAt(i) === "L"){
			if ( !(params.charAt(i+1) === "X"
				|| params.charAt(i+1) === "V"
				|| params.charAt(i+1) === "I")) {
				itsOk=false;
				strError += " C5: \""+params.charAt(i) +"\" no puede ir delante de \""+ params.charAt(i+1)+ "\".";
				break;
			}
		}
		if (params.charAt(i) === "D"){
			if ( !(params.charAt(i+1) === "C"
				|| params.charAt(i+1) === "L"
				|| params.charAt(i+1) === "X"
				|| params.charAt(i+1) === "V"
				|| params.charAt(i+1) === "I")) {
				itsOk=false;
				strError += " C6: \""+params.charAt(i) +"\" no puede ir delante de \""+ params.charAt(i+1)+ "\".";
				break;
			}
		}
	}


	//contamos el numero de cada letra en la cadena
	for (let i = 0;i<params.length;i++){
		switch (params.charAt(i)) {
			case "M" :
				varM++;
				break;
			case "D" :
				varD ++;
				break;
			case "C" :
				varC ++;
				break;
			case "L" :
				varL ++;
				break;
			case "X" :
				varX ++;
				break;
			case "V" :
				varV ++;
				break;
			case "I" :
				varI ++;
				break;
			default:
				strError += "El numero \""+params.charAt(i)+"\" no es válido";
				itsOk=false;
		}
	}

	console.log(" "+params+"  M:"+varM+" D:"+varD+" C:"+varC+" L:"+varL+" X:"+varX+" V:"+varV+" I:"+varI+ " "+strError);
	return itsOk;
}
validateRoman(arabToRoman(1666));
validateRoman("MDCLXVI");

validateRoman("IVXLCDMDCLXVI");

validateRoman("IXCMDCLXVI");	//ESTE NUMERO TENIA QUE FALLAR.
validateRoman(arabToRoman(801));
validateRoman(arabToRoman(949));
validateRoman(arabToRoman(3939));
validateRoman(arabToRoman(3940));


/*
validateRoman("I");
validateRoman("II");
validateRoman("IV");
validateRoman("IX");
validateRoman("IL");
validateRoman("IC");
validateRoman("ID");
validateRoman("IM");

validateRoman("V");
validateRoman("VI");
validateRoman("VV");
validateRoman("VX");
validateRoman("VL");
validateRoman("VC");
validateRoman("VD");
validateRoman("VM");

validateRoman("X");
validateRoman("XI");
validateRoman("XV");
validateRoman("XX");
validateRoman("XL");
validateRoman("XC");
validateRoman("XD");
validateRoman("XM");

validateRoman("L");
validateRoman("LI");
validateRoman("LV");
validateRoman("LX");
validateRoman("LL");
validateRoman("LC");
validateRoman("LD");
validateRoman("LM");

validateRoman("C");
validateRoman("CI");
validateRoman("CV");
validateRoman("CX");
validateRoman("CL");
validateRoman("CC");
validateRoman("CD");
validateRoman("CM");

validateRoman("D");
validateRoman("DI");
validateRoman("DV");
validateRoman("DX");
validateRoman("DL");
validateRoman("DC");
validateRoman("DD");
validateRoman("DM");

validateRoman("M");
validateRoman("MI");
validateRoman("MV");
validateRoman("MX");
validateRoman("ML");
validateRoman("MC");
validateRoman("MD");
validateRoman("MM");


validateRoman("XIIVIIXVILXIDCLM"); 	//String: "I" no puede ir delante de "L".
validateRoman("I");
validateRoman("IV");
validateRoman("IX");
validateRoman("IC");
validateRoman("ID");
validateRoman("IM"); 				//String: "I" no puede ir delante de "M".

validateRoman("XIIIIXVXDCLM"); 		//Existen 4 I
validateRoman("XIIIXVXDCMLMMMM");	//acaba con 4 M
validateRoman("XXXXIIIXVXDCMLMMM"); //empieza con 4 X
validateRoman("XIVDCLMa"); 			//hay una a
validateRoman("XIVDCLMV");			//hay dos V

validateRoman("MMMMXIVDCLMVIIIII");	//

validateRoman(arabToRoman(2019));
validateRoman(arabToRoman(1492));
validateRoman(arabToRoman(1898));
validateRoman(arabToRoman(1912));
validateRoman(arabToRoman(3999));
*/