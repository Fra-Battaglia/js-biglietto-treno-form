const price_button = document.getElementById('calc-price');
price_button.addEventListener('click', function(){

	// 1 - chiedere il nome e cognome del passeggero
	// 1.1 - pemettere l'inserimento con un input del prorprio nome e cognome
	
	let name_and_surname = document.getElementById('name_and_surname').value;
	
	// 2 - chiedere l'età del passeggero
	// 2.1 - pemettere l'inserimento con un input della prorpria età
	
	let age = document.getElementById('age').value;
	
	// 3 - chiedere il numero di chilometri che si intende percorrere
	// 3.1 - permettere l'inserimento con un input del numero di chilometri che si intende percorrere

	let num_km = document.getElementById('num_km').value;

	// 4 - moltiplicare il prezzo di 0.21€ per il numero di chilometri inseriti dall'utente

	let price = num_km * 0.21;

	// 5 - calcolare gli eventuali sconti sul prezzo ottenuto in base all'età inserita dall'untente
	// 5.1 - se l'età è inferiore ai 18 anni applicare uno sconto del 20%

	if (age < 18) {
		price = (price * 0.8).toFixed(2);
	}

	// 5.2 - se l'età è superiore ai 65 anni applicare uno sconto del 40%

	else if (age > 65) {
		price = (price * 0.6).toFixed(2);
	}

	// 5.3 - se l'età è compresa tra i 18 e i 65 anni non applicare nessuno sconto

	else if (age >= 18 && age < 65) {
		price = (price).toFixed(2);
	}

	// 6 - Stampare le informazioni sul biglietto

	document.getElementById('put-name').innerText = name_and_surname;
	document.getElementById('put-price').innerText = price;
});