for(var i = 0; i < $("input[placeholder]").length; i++){
	$("input[placeholder]").eq(i).bind({
			focus : function(){
				
					if($(this).val() == $(this).prop("placeholder")){
						$(this).val("");
						$(this).css("color","#000");
					}	
			},
			blur : function(){
				
					if(!$(this).val() && 
						$(this).val() != $(this).prop("placeholder")){
						$(this).val($(this).prop("placeholder"))
						$(this).css("color","#ccc");
					}
			}
		}
	);
	if(!$("input[placeholder]").eq(i).val() && 
		$("input[placeholder]").eq(i).val() != $("input[placeholder]").eq(i).prop("placeholder")){
		$("input[placeholder]").eq(i).val($("input[placeholder]").eq(i).prop("placeholder"))
	}
	$("input[placeholder]").eq(i).css("color","#ccc");
}