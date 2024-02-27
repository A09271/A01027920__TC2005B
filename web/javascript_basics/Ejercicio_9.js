
function smol(list){
	let strin;
	for(i = 1; i < list.length; i++){
		for(j = i; j > 0; j--){
			num = list[j].length;
			corto = list[j-1].length;
			if(corto > num){
				corto = num;
				strin = j;
			}
			}
	}
	return list[strin];
}

console.log(smol(["aa","aaaa","a","aaa"]));
