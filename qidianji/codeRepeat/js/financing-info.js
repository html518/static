/***	第一个编辑层	***/
/***	显示层	***/
$(".fin-con-fin-edit1").click(function(){
	$(".fin-investor").css("display","block")
	$(".fin-investor-con").css("display","block")
})
/***	显示删除的红色图标	***/
$(".fin-dele-investor").click(function(){
	$(".fin-investor-con dt div").css("display","block")	
})
/***	点击添加，自动添加新投资者	***/
$(".fin-add-investor").click(function(){
	$(".fin-investor-con dt div").css("display","none")
	$('<dl><dt><img src="images/fin-investor.jpg" /><div></div></dt><dd>姓名</dd></dl>').insertBefore($(".fin-add-investor"))		
	$(".fin-investor-con dt div").each(function(){
		$(this).click(function(){
			$(this).parent().parent().remove()
		})
	})
})
/***	点击删除红色图标，删除投资者***/
$(".fin-investor-con dt div").each(function(){
	$(this).click(function(){
		$(this).parent().parent().remove()
	})
})
/***	点击右上角关闭按钮，关闭第一个层***/
$(".fin-investor-close").click(function(){
	$(".fin-investor-con dt div").css("display","none")
	$(".fin-investor-con").css("display","none")
	$(".fin-investor").css("display","none")
})
/***	编辑第二个层	***/
/***	显示	***/
$(".fin-con-fin-edit2").click(function(){
	$(".fin-investor").css("display","block")
	$(".fin-financ").css("display","block")
})
/***	关闭	***/
$(".fin-financ-close").click(function(){
	$(".fin-investor").css("display","none")
	$(".fin-financ").css("display","none")
})