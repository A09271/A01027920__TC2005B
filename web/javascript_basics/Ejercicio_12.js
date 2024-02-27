
function mediana(arr){
	let med;
	med = (arr.length-1)/2;
	if((arr.length-1)%2 == 0){
		return arr[med];
	} else{
		med = med + 0.5;
		med = (arr[med] + arr[++med])/2
		return med;
	}
}

function moda(arr){
	if(arr.length == 1){
		console.log(arr);
		return;
	}
	let num = [];
	let i = arr.length;
	while (i != 0) {
		num.push(arr[arr.length-1]);
		arr.pop();
		if(arr.indexOf(num[(num.length-1)]) === -1){
			num.pop();
		}
		i--;
	}
	moda(num);
}


arreglo = [1,3,2,3];

console.log(mediana(arreglo)); //2.5
moda(arreglo); //3
