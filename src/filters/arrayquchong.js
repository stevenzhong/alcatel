export const arrayquchong = (array) =>{
	var tmpObj = {};
	var result = [];
	array.forEach(function(a){
		var key = (typeof a) + a;
		if(!tmpObj[key]){
			tmpObj[key] = true;
			result.push(a);
		}
	})
	return result.sort();
}