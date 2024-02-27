
function mcd(x,y){
	const prime = [2,3,5,7,9,11,13,17,19];
	let maxcd = 1;
	let i = 0;
	let flag = 0;

	while(x != 1 && y != 1){
		if(x%prime[i] == 0){
			x = x/prime[i];
			flag = 1;
		} else{flag = -1;}
		if(y%prime[i] == 0){
			y = y/prime[i];
			flag++;
		} else {flag = 0; }
		if(flag > 0){
			maxcd = maxcd * prime[i];
		}
		i++;
		if(i == prime.length-1){i = 0;}
	}
	return maxcd;
}

console.log(mcd(180,200));