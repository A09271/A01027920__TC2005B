
function quitaDuplicados(arr) {
	let unico = [];
	for (i = 0; i < arr.length; i++) {
		if (unico.indexOf(arr[i]) == -1) {
			unico.push(arr[i]);
		}
	}
	return unico;
}

function factorizar(num){
    let lista = [];
    for (let i = num; i >= 0; i--) {
        if (num%i == 0) {
            lista.push(i);
            lista.push(num/i);
        }
    }
    lista.sort(function(a, b){return a-b});
    return quitaDuplicados(lista);
}

console.log(factorizar(12));
