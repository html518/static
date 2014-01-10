function switchTab(navInnerElem, conInnerElem, fun){
	// var navElem = $(navInnerElem).parent();
	$(navInnerElem).bind({
		click : function(){
			var ind = $(navInnerElem).index($(this));
			$(conInnerElem).hide();
			$(conInnerElem).eq(ind).show();
			if(typeof fun == "function"){
				(fun)();
			}else if(typeof fun == "string"){
				eval(fun);
			}  
		}
	})
}