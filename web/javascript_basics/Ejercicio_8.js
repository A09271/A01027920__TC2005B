
function quitaDuplicados(arr) {
	let unico = [];
	for (i = 0; i < arr.length; i++) {
		if (unico.indexOf(arr[i]) == -1) {
			unico.push(arr[i]);
		}
	}
	return unico;
}


console.log(quitaDuplicados([1, 0, 1, 1, 0, 0]));
