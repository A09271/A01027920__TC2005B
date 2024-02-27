
function hack(str){
	str = str.split("");
	const speak = new Map([
		["a","4"],
		["b","6"],
		["e","3"],
		["i","1"],
		["o","0"],
		["s","5"]
	]);
	for(let i = 0; i < str.length; i++){
		if(speak.has(str[i])){
			str[i] = speak.get(str[i]);
		}
	}
	str = str.join("");
	return str;
}

console.log(hack("Javascript es divertido"));
