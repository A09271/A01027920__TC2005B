//convertir "jaja hola" a "Jaja Hola"

function mayus(str){
	let arreglo = str.split(" ");
	let aux;
	for(i = 0; i < arreglo.length; i++){
		aux = arreglo[i];
		aux = aux.split("");
		aux[0] = aux[0].toUpperCase();
		aux = aux.join("");
		arreglo[i] = aux;
	}
	str = arreglo.join(" ");
	return str;
}

console.log(mayus("jaja hola"))
