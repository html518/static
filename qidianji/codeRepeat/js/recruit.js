
$("#rec-more1").click(function (){
	if ($("#rec-location").height() == 40) {
		$("#rec-location").height("auto");
	}else {
		$("#rec-location").height("40");
	}
})
$("#rec-more2").click(function (){
	if ($("#rec-trade").height() == 40) {
		$("#rec-trade").height("auto");
	}else {
		$("#rec-trade").height("40");
	}
})

$("#rec-con li").mouseover(function (){
	console.log($("#rec-con li").index(this))
	$("#rec-con .rec-register").eq($("#rec-con li").index(this)).show();
})
$("#rec-con li").mouseout(function (){
	console.log($("#rec-con li").index(this))
	$("#rec-con .rec-register").eq($("#rec-con li").index(this)).hide();
})

$("#rec-con .rec-register").click(function (){
	$("#rec-con li").eq($("#rec-con .rec-register").index(this)).css({ background: "#fffcf7", height: "1230px"});
	$(this).html("注册");
})