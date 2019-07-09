//Tercera Kata: Poker

/*### Reglas

# Tercera Kata
## Póker
### Introdución

Una baraja de poker contiene 52 cartas. 

### Cartas
Una carta se compone de dos cosas:

Palo (suit) que pueden ser los siguientes:
* picas/spades (S)
* corazones/hearts (H)
* tréboles/clubs (C)
* diamantes/diamonds (D). 

Valor:
* 2 
* 3
* 4
* 5
* 6
* 7
* 8
* 9
* 10 /Ten (T)
* dama/Jack (J)
* reina/Queen (Q)
* rey/King (K)
* as/Ace (A). 

### Mano

Una mano es un conjunto de 5 cartas, estamos jugando con una baraja, por lo que no puede haber cartas repetidas.
Las manos de poker se ordenan de menor a mayor dependiendo de una serie de reglas asociadas a la mano. 

* High Card (Carta Más Alta): Para manos que no entran en ninguna de las manos superior, el ganador es aquel que tiene la carta más alta. Si se produce un empate entonces se compara la siguiente carta más alta y así sucesivamente. 
* Pair (Parejas): 2 de las 5 cartas de la mano tienen el mismo valor. Si las dos manos tienen pareja, entonces gana la que tenga la pareja más alta. Si ambas parejas son iguales entonces gana el que tenga la carta más alta. 
* Two Pairs (Dobles Parejas): La mano contiene 2 parejas diferentes. Si las dos manos tienen dobles parejas diferentes entonces gana aquella que tenga la pareja más alta. Si las dos manos tienen las mismas parejas entonces se compara la otra pareja. Si ambas manos tiene las mismas parejas entonces gana el que tenga la carta más alta restante. 
* Three of a Kind (Trio): 3 cartas de la mano tienen el mismo valor. Gana la mano que tiene las 3 cartas con mayor valor. 
* Straight (Escalera): La mano contiene 5 cartas consecutivas. Si las dos manos tienen escalera entonces gana la que tiene la carta más alta. 
* Flush (Color): La mano tiene 5 cartas con la misma cara. Si ambas manos tienen color entonces gana el que tenga la carta más alta. 
* Full House (Full): La mano tiene un trío y una pareja. En caso de tener ambas manos full entonces gana el que tenga el trío más alto. 
* Four of a Kind (Poker): 4 cartas con el mismo valor. En caso de tener ambas manos poker gana el que tenga el valor más alto.
* Straight flush (Escalera de Color): 5 cartas de la misma cara pero con valores consecutivos. En caso de tener escalera las dos manos entonces gana el que tenga el valor más alto.

### Ejemplos

Entrada: Jugador 1: 2H 3D 5S 9C KD Jugador 2: 2C 3H 4S 8C AH
Salida: Jugador 2 gana, carta más alta:

Entrada: Jugador 1: 2H 4S 4C 2D 4H Jugador 2: 2S 8S AS QS 3S
Salida: Jugador 1 gana, escalera de color

Entrada: Jugador 1: 2H 3D 5S 9C KD Jugador 2: 2C 3H 4S 8C KH
Salida: Jugador 1 gana, carta más alta

Entrada: Jugador 1: 2H 3D 5S 9C KD Jugador 2: 2D 3H 5C 9S KH
Salida: Empate
*/

const SUITS = {
	code: ["S", "H", "C", "D"],
	nameSpa: ["Picas", "Corazones", "Tréboles", "Diamantes"],
	nameEng: ["Spades", "Hearts", "Clubs", "Diamonds"]
};

const CARD_VALUES = {
	code: ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"],
	nameSpa: [2, 3, 4, 5, 6, 7, 8, 9, 10, "Dama", "Reina", "Rey", "As"],
	nameEng: [2, 3, 4, 5, 6, 7, 8, 9, "Ten", "Jack", "Queen", "King", "Ace"]
};

//Constructor de Carta
function Card(card_value, suit) {
	this.card_value = card_value;
	this.suit = suit;
	this.indiceNumero = CARD_VALUES.code.indexOf(this.card_value);
	this.indicePalo = SUITS.code.indexOf(this.suit);

	this.getCardValue = function() {
		return this.card_value;
	};
	this.getSuit = function() {
		return this.suit;
	};

	this.idCard = function() {
		return this.card_value + this.suit;
	};
	this.getNameSpa = function() {
		return (
			CARD_VALUES.nameSpa[this.indiceNumero] +
			" de " +
			SUITS.nameSpa[this.indicePalo]
		);
	};
	this.getNameEng = function() {
		return (
			CARD_VALUES.nameEng[this.indiceNumero] +
			" of " +
			SUITS.nameEng[this.indicePalo]
		);
	};
}

//constructor de Baraja
function Baraja() {
	this.baraja = new Array(CARD_VALUES.code.length);
	this.repartido = new Array(CARD_VALUES.code.length);

	for (let i = 0; i < CARD_VALUES.code.length; i++) {
		this.baraja[i] = new Array(SUITS.code.length);
		this.repartido[i] = new Array(SUITS.code.length);
		for (let j = 0; j < SUITS.code.length; j++) {
			this.baraja[i][j] = new Card(CARD_VALUES.code[i], SUITS.code[j]);
			this.repartido[i][j] = false;
		}
	}

	this.getCard = function(indiceValor, indicePalo) {
		return this.baraja[indiceValor][indicePalo].idCard();
	};
	this.queCartaEs = function(indiceValor, indicePalo) {
		return this.baraja[indiceValor][indicePalo].getNameSpa();
	};

	this.whatCardIs = function(indiceValor, indicePalo) {
		return this.baraja[indiceValor][indicePalo].getNameEng();
	};

	this.estaRepartida = function(idValor, idPalo) {
		return this.repartido[idValor][idPalo];
	};

	this.sinRepartir = function() {
		let restan = 0;
		for (let i = 0; i < CARD_VALUES.code.length; i++) {
			for (let j = 0; j < SUITS.code.length; j++) {
				if (!this.estaRepartida(i, j)) {
					restan++;
				}
			}
		}
		return restan;
	};

	this.repartirCarta = function() {
		if (this.sinRepartir() > 0) {
			let valAleatorio = Math.floor(13 * Math.random());
			let palAleatorio = Math.floor(4 * Math.random());
			while (this.estaRepartida(valAleatorio, palAleatorio)) {
				valAleatorio = Math.floor(13 * Math.random());
				palAleatorio = Math.floor(4 * Math.random());
			}
			if (!this.estaRepartida(valAleatorio, palAleatorio)) {
				this.repartido[valAleatorio][palAleatorio] = true;
				return this.getCard(valAleatorio, palAleatorio);
			}
		}
	};

	this.repartirMano = function() {
		let mano = [];
		if (this.sinRepartir() >= 5) {
			for (let i = 0; i < 5; i++) {
				mano[i] = this.repartirCarta();
			}
		}
		return mano;
	};
}

//constructor de Poker - juego y reglas
function Poker(){
	//recibe un array de 5 cartas (una mano) y las ordena de menor a mayor.
	this.ordenarMano = function (mano) {
		let aux = Card();
		//console.log(mano)
		//console.log(mano[0][0] + " " + mano[1][0]+" "+mano[2][0]);
		for (let i=0;i<4;i++){
			for (let j=i+1;j<5;j++) {
				//console.log("i:" + i + " j:" + j);
				//console.log("i:"+i+ " j:" + j+ " > " +mano[i]+" "+mano[j]);
				if ( CARD_VALUES.code.indexOf(mano[i][0]) > CARD_VALUES.code.indexOf(mano[j][0]) ) {
					aux = mano[i];
					mano[i] = mano[j];
					mano[j] = aux;
					//console.log("Cambio " + mano[i]+" "+mano[j]+ " >> " + mano);
				}
			}
		}
		return mano;
	}
	
	//true si es Color (todas del mismo palo)
	this.isColor = function (mano) {
		let unColor=true;
		let i=0;
		while (unColor && i < 4) {
			unColor = mano[i][1] === mano[i+1][1]; //veo si son del mismo palo
			i++;
		}
		return(unColor);	
	}

	//True si es escalera (todas con numeración consecutiva, incluido As-1-2-3-4 y T-J-Q-K-As)
	this.isStraight = function(mano) {
		mano = this.ordenarMano(mano);
		let inSequence = true;
		let i = 0;
		//console.log(mano);
		while (inSequence && i < 4) { //comparo cada numero con el siguiente para ver si es escalera
			//console.log("i:" + i + " " + CARD_VALUES.code.indexOf(mano[i][0])+ " " +CARD_VALUES.code.indexOf(mano[i+1][0]) );
			//en el caso de que la mano sea As-2-3-4-5 -> Five High
			if (i===3 && inSequence && mano[4][0]==="A" ) {
				inSequence = true; 
			} else {
				inSequence = CARD_VALUES.code.indexOf(mano[i][0]) + 1 === CARD_VALUES.code.indexOf(mano[i+1][0]); 
			}
			//inSequence = mano[i][1] === mano[i + 1][1]; //veo si son del mismo palo
			i++;
		}
		return inSequence;
	};
	//Devuelve una cadena con el numero de repeticiones de cada numero. suma 5 siempre
	this.strPoints = function (mano) {
		mano=this.ordenarMano(mano);
		//let stringRep = mano[0][0] + mano[1][0] + mano[2][0]+ mano[3][0] + mano[4][0];
		let contaNum=1;
		let stringPoints = "";
		for (let i=0;i<4;i++){
			if (mano[i][0] == mano[i+1][0]) { 
				contaNum++;
			} else {
				stringPoints += contaNum;
				contaNum=1;
			}
		}
		stringPoints += contaNum;
		return stringPoints;
		// console.log(mano);
		// console.log(stringRep);
		// console.log(stringPoints);
	}

	//Ofrece un valor para medir el valor de la mano.
	this.ponderate = function (mano) {
		let stringPoints = this.strPoints(mano);
		let valorPonderado;
		switch (stringPoints) {
			case "14":
			case "41":
				valorPonderado = 7;
				break;
			case "23":
			case "32":
				valorPonderado = 6;
				break;
			case "113":
			case "311":
			case "131":
				valorPonderado = 3;
				break;
			case "122":
			case "212":
			case "221":
				valorPonderado = 2;
				break;
			case "1112": 
			case "1121": 
			case "1211": 
			case "2111":
				valorPonderado = 1;
				break;
			case "11111":
				if (this.isColor(mano) && this.isStraight(mano)) {
					valorPonderado = 8;
				} else if (this.isColor(mano)) {
					valorPonderado = 5;
				} else if (this.isStraight(mano)) {
					valorPonderado = 4;
				} else {
					valorPonderado = 0;
				}
				break;
		}
		return valorPonderado;
	}

}


let juego = new Poker();
let fistro = new Baraja();
let unaMano = fistro.repartirMano();

// console.log(unaMano);
// console.log(juego.ordenarMano(unaMano));
// console.log(juego.ordenarMano( ["2D","5D","4D","6D","3D"] ));

// console.log(juego.isColor(["2D", "5D", "4D", "6D", "3D"]));
// console.log(juego.isColor(["2C", "5D", "4D", "6D", "3D"]));
// console.log(juego.isColor(["2D", "5D", "4D", "6D", "3C"]));
// console.log(juego.isColor(["2D", "5D", "4D", "6A", "3C"]));

// console.log(juego.isStraight(["7D", "5D", "9D", "6D", "8D"]));
// console.log(juego.isStraight(["AD", "TD", "KD", "QD", "JD"]));
// console.log(juego.isStraight(["AD", "5D", "4D", "3D", "2D"]));

// console.log(juego.isStraight(fistro.repartirMano()));
// console.log(juego.isStraight(fistro.repartirMano()));
// console.log(juego.isStraight(fistro.repartirMano()));



// console.log(juego.strPoints(fistro.repartirMano()));
// console.log(juego.strPoints(fistro.repartirMano()));
// console.log(juego.strPoints(fistro.repartirMano()));
// console.log(juego.strPoints(fistro.repartirMano()));





//0 * High Card (Carta Más Alta): Para manos que no entran en ninguna de las manos superior, el ganador es aquel que tiene la carta más alta. Si se produce un empate entonces se compara la siguiente carta más alta y así sucesivamente. 
console.log(juego.strPoints(["2D", "AC", "3S", "9H", "KD"])); // 11111
console.log(juego.ponderate(["2D", "AC", "3S", "9H", "KD"])); // 11111
//1 * Pair (Parejas): 2 de las 5 cartas de la mano tienen el mismo valor. Si las dos manos tienen pareja, entonces gana la que tenga la pareja más alta. Si ambas parejas son iguales entonces gana el que tenga la carta más alta. 
console.log(juego.strPoints(["2D", "AC", "3S", "KH", "KD"])); // 11112 - 11121 - 11211 - 12111 - 21111
console.log(juego.ponderate(["2D", "AC", "3S", "KH", "KD"])); // 1112 - 1121 - 1211 - 2111 
//2 * Two Pairs (Dobles Parejas): La mano contiene 2 parejas diferentes. Si las dos manos tienen dobles parejas diferentes entonces gana aquella que tenga la pareja más alta. Si las dos manos tienen las mismas parejas entonces se compara la otra pareja. Si ambas manos tiene las mismas parejas entonces gana el que tenga la carta más alta restante. 
console.log(juego.strPoints(["2D", "AC", "AS", "KH", "KD"])); // 122 - 212 - 221 
console.log(juego.ponderate(["2D", "AC", "AS", "KH", "KD"])); // 122 - 212 - 221 
//3 * Three of a Kind (Trio): 3 cartas de la mano tienen el mismo valor. Gana la mano que tiene las 3 cartas con mayor valor. 
console.log(juego.strPoints(["2D", "AC", "AS", "AH", "KD"])); // 113 - 311 - 131 
console.log(juego.ponderate(["2D", "AC", "AS", "AH", "KD"])); // 113 - 311 - 131 
//4 * Straight (Escalera): La mano contiene 5 cartas consecutivas. Si las dos manos tienen escalera entonces gana la que tiene la carta más alta. 
console.log(juego.strPoints(["AC", "TD", "KS", "QH", "JC"])); // 11111
console.log(juego.ponderate(["AC", "TD", "KS", "QH", "JC"])); // 11111
//5 * Flush (Color): La mano tiene 5 cartas con la misma cara. Si ambas manos tienen color entonces gana el que tenga la carta más alta. 
console.log(juego.strPoints(["AD", "2D", "4D", "6D", "JD"])); // 11111
console.log(juego.ponderate(["AD", "2D", "4D", "6D", "JD"])); // 11111
//6 * Full House (Full): La mano tiene un trío y una pareja. En caso de tener ambas manos full entonces gana el que tenga el trío más alto. 
console.log(juego.strPoints(["AD", "AC", "AS", "KH", "KD"])); // 23 - 32
console.log(juego.ponderate(["AD", "AC", "AS", "KH", "KD"])); // 23 - 32
//7 * Four of a Kind (Poker): 4 cartas con el mismo valor. En caso de tener ambas manos poker gana el que tenga el valor más alto.
console.log(juego.strPoints(["AD", "AC", "AS", "AH", "KD"])); // 14 - 41
console.log(juego.ponderate(["AD", "AC", "AS", "AH", "KD"])); // 14 - 41
//8 * Straight flush (Escalera de Color): 5 cartas de la misma cara pero con valores consecutivos. En caso de tener escalera las dos manos entonces gana el que tenga el valor más alto.
console.log(juego.strPoints(["AD", "5D", "4D", "3D", "2D"])); // 11111
console.log(juego.ponderate(["AD", "5D", "4D", "3D", "2D"])); // 11111

console.log(juego.strPoints(["AD", "TD", "KD", "QD", "JD"])); // 11111
console.log(juego.ponderate(["AD", "TD", "KD", "QD", "JD"])); // 11111

/*
console.log(fistro.getCard(0, 0));
console.log(fistro.queCartaEs(0, 0));
console.log(fistro.whatCardIs(0, 0));
console.log(fistro.getCard(12, 3));
console.log(fistro.queCartaEs(12, 3));
console.log(fistro.whatCardIs(12, 3));

console.log(fistro.sinRepartir());
console.log(fistro.repartirCarta());
console.log(fistro.sinRepartir());
*/

// for (let index = 0; index < 9; index++) {
// 	console.log(fistro.repartirMano());
// 	console.log(fistro.sinRepartir());
// }

// for (let i=0 ; i < CARD_VALUES.code.length ; i++){
// 	for (let j=0 ; j < SUITS.code.length ; j++ ) {
// 		console.log(fistro.repartirCarta());

// 		//console.log(fistro.getCard(i,j) +" "+ fistro.queCartaEs(i,j) +" "+fistro.repartirCarta());
// 	//	console.log(fistro.);

// 	};
// };

// for (let i = 0; i < SUITS.codes.length ; i++) {
// 	console.log(i+" "+SUITS.codes[i] +" "+ SUITS.nameSpa[i]+" "+ SUITS.nameEng[i]);
// };

// for ( let i = 0; i < CARD_VALUES.code.length ; i++ ){
// 	console.log( i + " " + CARD_VALUES.code[i]+ " "+CARD_VALUES.nameSpa[i]+ " "+ CARD_VALUES.nameEng[i]);
// };

// let prueba1 = new Card("A","S");
// let prueba2 = new Card("Q", "H");
// let prueba3 = new Card("J", "C");
// console.log(prueba1.idCard());
// console.log(prueba2.idCard());
// console.log(prueba3.idCard());
// console.log(prueba1.getCardValue()+" "+ prueba1.getSuit());
// console.log(prueba2.getCardValue()+" "+ prueba2.getSuit());
// console.log(prueba3.getCardValue()+" "+ prueba3.getSuit());
// console.log(prueba1.getNameSpa());
// console.log(prueba2.getNameSpa());
// console.log(prueba3.getNameSpa());
// console.log(prueba1.getNameEng());
// console.log(prueba2.getNameEng());
// console.log(prueba3.getNameEng());
