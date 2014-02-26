$(".coinfo-operate > strong").click(function(){
	$(".coinfo-investment-delete").css("display","block")
})
$(".coinfo-investment .coinfo-investment-delete").click(function(){
	$(this).parent().remove()
})