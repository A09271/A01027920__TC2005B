
function frecuente(arr){
	if(arr.length == 1){
		console.log(arr);
		return;
	}
	let str = [];
	let i = arr.length;
	while (i != 0) {
		str.push(arr[arr.length-1]);
		arr.pop();
		if(arr.indexOf(str[(str.length-1)]) === -1){
			str.pop();
		}
		i--;
	}
	frecuente(str);
}

frecuente(["a","b","a","c","a","b"]); //a
