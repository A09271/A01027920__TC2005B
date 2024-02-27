
function norep(arr) {
	arr = arr.split("");
	const resultado = arr.filter(letra => arr.indexOf(letra) === arr.lastIndexOf(letra));
	return resultado;
}


console.log(norep("abacddbec"));