

function inv(arr){
	let rev = [];
	for(i = arr.length-1; i >= 0; i--){
		rev.push(arr[i]);
	}
	return rev;
}

function mod(arr){
	let aux;
	for(i = 1; i < arr.length; i++){
		for(j = i; j > 0; j--){
			aux = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = aux;
		}
	}
	return arr;
}

let arreglo = [1,2,3,4,5];

console.log(arreglo);

console.log(inv(arreglo));

console.log(mod(arreglo));
