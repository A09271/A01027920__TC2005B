
arreglo[]

let flag;
let aux;

for(){
	for(){
		if(arreglo[j] > arreglo[j+1]){
			aux = arreglo[j];
			arreglo[j] = arreglo[j+1];
			arreglo[j-1] = aux;
			flag = true;
		}
		flag = false;
	}
	if(flag){break;}
}
