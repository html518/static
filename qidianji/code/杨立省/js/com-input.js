var reg_inputs = document.getElementsByTagName("input");
var reg_i = document.getElementsByTagName("i");
for (var i = 0; i < reg_inputs.length; i ++){
	reg_inputs[i].index = i;
	reg_inputs[i].onfocus = function(){
		reg_i[this.index].style.borderColor = "#f1ca7e";
	}
	reg_inputs[i].onblur = function(){
		reg_i[this.index].style.borderColor = "#ccc";
	}
}