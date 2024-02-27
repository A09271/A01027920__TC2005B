
function rever(str){
	spl = str.split("");
	rev = spl.reverse();
	join = rev.join("");
	if(str == join){return true;}
	else {return false;}
}

console.log(rever("oso"));
