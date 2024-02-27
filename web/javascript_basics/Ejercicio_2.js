
function bubble(arreglo){

	let flag;
	let aux;
	for (let i = 1; i < arreglo.length; i++){
		for (let j = 0; j < (arreglo.length)-1; j++){
			if (arreglo[j] > arreglo[j+1]){
				aux = arreglo[j];
				arreglo[j]=arreglo[j+1];
				arreglo[j+1]=aux;
				flag = true;
			}
			flag = false;
		} 
		if (flag){
			break;
		}
	}
}

let arr = [4,9,3,7,6,1,2];
bubble(arr)
console.log(arr);
