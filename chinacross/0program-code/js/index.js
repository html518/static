/**第一块 大图切换**/
var coneImgIndex = 0;
var coneSliTimer = null;
$(".cone-slider .slider-pic img").eq(0).css("opacity", "1");
$(".cone-slider .slider-desc li").eq(0).css("opacity", "1");
coneSliTimer = setTimeout(coneSliMove, 3500); 
	
function coneSliMove() {
	getConeImgIndex();
	coneSliMoveTo(); 
}; 

// 改变背景色
$("#lastNews>li>a").mouseenter(function() {
	$(this).parent().css("background" , "#F0F4F7");
}).mouseleave(function() {
	$(this).parent().css("background" , "");
});

// 获取图片index
function getConeImgIndex() {
	coneImgIndex++;
	if(coneImgIndex >= 3) {
		coneImgIndex = 0;
	}
}							
function coneSliMoveTo() {  
	$(".cone-slider .slider-pic img").each(function(n) {
		if($(this).css("opacity") > 0) {
			$(this).stop(true).animate({"opacity":"0"}, 500);
		}
	})	
	changeSliCon();
	$(".cone-slider .slider-pic img").eq(coneImgIndex).stop(true).animate({"opacity":"1"}, 500)
	if(coneSliTimer) {
		clearTimeout(coneSliTimer);
	}
	coneSliTimer = setTimeout(coneSliMove, 3500); 
}   

// 内容变化
function changeSliCon() { 
	$(".cone-slider .slider-desc li").each(function(n) { 
		if(coneImgIndex == n) { 
			$(this).css("opacity", "1");
		}else {
			$(this).css("opacity", "0");
		}
	});
}

// 左右切换   prevbtn nextbtn
$(".prevbtn").bind("click", function() {
	if(coneSliTimer) {
		clearTimeout(coneSliTimer);
	}
	coneImgIndex--;
	if(coneImgIndex < 0) {
		coneImgIndex = 2;
	}
	coneSliMoveTo();
})
$(".nextbtn").bind("click", function() {
	if(coneSliTimer) {
		clearTimeout(coneSliTimer);
	}
	coneImgIndex++;
	if(coneImgIndex >= 3) {
		coneImgIndex = 0;
	}
	coneSliMoveTo();
}) 

// mouseover、mouseout事件
$(".slider-pic").bind("mouseover", function() {
	if(coneSliTimer) {
		clearTimeout(coneSliTimer);
	}
}).bind("mouseout", function() {
	if(coneSliTimer) {
		clearTimeout(coneSliTimer);
	}
	coneSliTimer = setTimeout(coneSliMove, 3500); 
})

/**第一块 公益活动 切换**/ 
$("#benefit-act").bind("click", function() {
	$(this).attr({"class": "active"});
	$("#benefit-info").attr({"class": ""});
	$(".cone-benefit dl").hide();
	$(".cone-benefit ul").css("margin-top","10px");
	$(".cone-benefit ul").find("li").each(function(n) {
		if(n == 1) {
			$(this).css("border-top","1px dotted gray")
		}else {
			$(this).css("border","none");
		}
	});
})
$("#benefit-info").bind("click", function() {
	$(this).attr({"class": "active"});
	$("#benefit-act").attr({"class": ""});
	$(".cone-benefit ul").css("margin-top","");
	$(".cone-benefit ul").find("li").each(function(n) {
		if(n == 0) {
			$(this).css("border-top","1px dotted gray")
		}else {
			$(this).css("border","none");
		}
	});
	$(".cone-benefit dl").show(); 
}) 

/**第一块 @我们 滚动定时器**/ 
var contactTop = 0;
var contactTopTimer = null;
contactTopTimer = setInterval(getContTop, 40); 
$(".cone-connect-con").bind("mouseover", function() {
	if(contactTopTimer) {
		clearInterval(contactTopTimer);
	}
}).bind("mouseout", function() {
	if(contactTopTimer) {
		clearInterval(contactTopTimer);
	}
	contactTopTimer = setInterval(getContTop, 40); 
})
// @我们 定时器函数
function getContTop(){
	contactTop++;
	if($(".cone-connect-con ul").height() - $(".cone-connect-con").scrollTop() <= $(".cone-connect-con").height()) {
		contactTop = 0; 
	} 	
	$(".cone-connect-con").scrollTop(contactTop);
}

/**第二块 在路上人物 图片滚动**/ 
var onroadSliTimer = null;
onroadSliTimer = setTimeout(onroadSliMove, 3500);
function onroadSliMove() {
	if($(".onroad-pic-slider").scrollLeft() == 67) {  
		$(".onroad-pic-slider").animate({"scrollLeft": "0"}, 300);
	}else {
		$(".onroad-pic-slider").animate({"scrollLeft": "67"}, 300);
	} 
	if(onroadSliTimer) {
		clearTimeout(onroadSliTimer);
	}
	onroadSliTimer = setTimeout(onroadSliMove, 3500);
} 

// 左右 点击切换
$(".onroad-prevbtn").bind("click",function() {
	if(onroadSliTimer) {
		clearTimeout(onroadSliTimer);
	}
	$(".onroad-pic-slider").animate({"scrollLeft": "0"}, 300);
	onroadSliTimer = setTimeout(onroadSliMove, 3500);
})
$(".onroad-nextbtn").bind("click",function() {
	if(onroadSliTimer) {
		clearTimeout(onroadSliTimer);
	}
	$(".onroad-pic-slider").animate({"scrollLeft": "67"}, 300);
	onroadSliTimer = setTimeout(onroadSliMove, 3500);
})

// mouseover、mouseout事件
$(".onroad-pic-slider").bind("mouseover", function() {
	if(onroadSliTimer) {
		clearTimeout(onroadSliTimer);
	}
}).bind("mouseout", function() {
	if(onroadSliTimer) {
		clearTimeout(onroadSliTimer);
	}
	onroadSliTimer = setTimeout(onroadSliMove, 3500)
})

/**第四块 线路排名、越野中国 列表tab切换**/ 
//线路排名
$(".cfour-line-nav li a").eq(0).css("color", "red");
$("#cfour-line-tab2").hide();
$("#cfour-line-tab3").hide();

$("#cfour-sharebtn").css("font-weight", "normal");
$(".cfour-line-con2").hide();

$(".cfour-line-tab li span").each(function(n) {
	if(n < 3) {
		$(this).css("background-color", "red");
	}
})
switchTab($(".cfour-line-nav li a"), $(".cfour-line-tab"), function(tabNum) {
	$(".cfour-line-nav li a").each(function(n) {
		if(tabNum == n) {
			$(this).css("color", "red");
		}else {
			$(this).css("color", "");
		}
	})
	$(".cfour-line-tab").eq(tabNum).find("li span").each(function(n) {
		if(n < 3) {
			$(this).css("background-color", "red");
		}
	})
}); 

$("#cfour-linebtn").bind("click", function() {
	$("#cfour-sharebtn").css("font-weight", "normal");
	$("#cfour-linebtn").css("font-weight", "bold");
	$(".cfour-line-con2").hide();
	$(".cfour-line-con").show();
})
$("#cfour-sharebtn").bind("click", function() { 
	$("#cfour-linebtn").css("font-weight", "normal");
	$("#cfour-sharebtn").css("font-weight", "bold");
	$(".cfour-line-con").hide();
	$(".cfour-line-con2 li span").each(function(n) {
		if(n < 3) {
			$(this).css("background-color", "red");
		}
	})
	$(".cfour-line-con2").show();
}) 

//越野中国
$(".cfour-cross-nav li a").eq(0).css("color", "red");
$("#cfour-cross-tab2").hide();
$("#cfour-cross-tab3").hide(); 

switchTab($(".cfour-cross-nav li a"), $(".cfour-cross-tab"), function(tabNum) {
	$(".cfour-cross-nav li a").each(function(n) {
		if(tabNum == n) {
			$(this).css("color", "red");
		}else {
			$(this).css("color", "");
		}
	}) 
}); 

/**第四块 中国瞳孔**/ 
var eyeIndex = 0;
var eyeTimer = null;
$(".cfour-eye-nav span").eq(0).css("background-color", "red");
$(".cfour-eye-pics li").eq(0).css("opacity", "1");
eyeTimer = setTimeout(eyePicMove, 3500); 
	
function eyePicMove() {
	getEyeIndex();
	eyePicMoveTo();

}; 
// 获得图片 index
function getEyeIndex() {
	eyeIndex++;
	if(eyeIndex >= 3) {
		eyeIndex = 0;
	}
}							
function eyePicMoveTo() {  
	$(".cfour-eye-pics li").each(function(n) {
		if($(this).css("opacity") > 0 ){
			$(this).stop(true).animate({"opacity":"0"}, 500);
		}
	})	
	changeBJ();
	$(".cfour-eye-pics li").eq(eyeIndex).stop(true).animate({"opacity":"1"}, 500)
	if(eyeTimer) {
		clearTimeout(eyeTimer);
	}
	eyeTimer = setTimeout(eyePicMove, 3500);
} 
$(".cfour-eye-nav span").bind("click", function() {
	if(eyeTimer) {
		clearTimeout(eyeTimer);
	}
	eyeIndex = $(".cfour-eye-nav span").index(this);
	eyePicMoveTo(); 
})

// 数字 颜色变化
function changeBJ() { 
	$(".cfour-eye-nav").find("span").each(function(n) { 
		if(eyeIndex == n) {
			$(this).css("background-color", "red");
		}else {
			$(this).css("background-color", "");
		}
	});
} 

// mouseover、mouseout事件
$(".cfour-eye-pics").bind("mouseover", function() {
	if(eyeTimer) {
		clearTimeout(eyeTimer);
	}
}).bind("mouseout", function() {
	if(onroadSliTimer) {
		clearTimeout(eyeTimer);
	}
	eyeTimer = setTimeout(eyePicMove, 3500); 
})

/**第七块 风云榜**/ 
$(".cseven-billboard-list li").find("span").each(function(n) {
	if(n < 3) {
		$(this).css("background-color", "red");
	}
})	

/**第8块 图片切换滚动**/
// 初始化图片滚动显示
resetImgScroll();

$(".ceight-pic-con1 li").click(imgScrollAll);

// 图片滚动
var clickTimeNum = 0;		// 限制鼠标点击速度的变量。
function imgScrollAll() {
	if(clickTimeNum > 0){
		return false;
	}
	if ($(this).css("right") != "95px"){
		imgScroll(this);
		// 判断滚动方向
		if ($(this).css("right") === "0px"){
			imgScrollLeft(this);
		} else {
			imgScrollRight(this);
		}
		// 判断滚动到第一张还是最后一张
		if ($(this).html() == $(".ceight-pic-con1 li:first").html()){
			imgScrollFirst();
		} else if ($(this).html() == $(".ceight-pic-con1 li:last").html()){
			imgScrollLast();
		}
	}
	// 限制鼠标点击速度最快每500ms点击一次
	clickTimeNum ++;
	setTimeout(function(){
		clickTimeNum = 0;
	},500);
}
// 初始化图片滚动显示
function resetImgScroll() {
	$(".ceight-pic-con1 li").css("display" , "none");
	$(".ceight-pic-con1 li:last").show().css("right" , "273px");
	$(".ceight-pic-con1 li:last").prev().show().css({
		width : 255,
		height : 170,
		zIndex : 100,
		right : 95,
		top : 0
	});
	$(".ceight-pic-con1 li:last").prev().prev().show();
}
// 图片滚动（图片放大居中）
function imgScroll(tag) {
	$(tag).css("zIndex", 100).animate({
		width : 255,
		height : 170,
		right : 95,
		top : 0
	},500);
}
// 图片向左滚动
function imgScrollLeft(tag) {
	$(tag).next().css("zIndex", 5).animate({
		width : 170,
		height : 113,
		right : 273,
		top : 26
	},500);
	$(tag).next().next().css("zIndex", 3).animate({
		right : 300,
		opacity : 0
	},500,function(){
		$(tag).next().next().css("display" , "none")
	});
	$(tag).prev().css({
		right : "-27px",
		display : "block",
		opacity : 0
	}).animate({
		right : 0,
		opacity : 1
	},500);
}
// 图片向右滚动
function imgScrollRight(tag) {
	$(tag).prev().css("zIndex", 5).animate({
		width : 170,
		height : 113,
		right : 0,
		top : 26
	},500);
	$(tag).prev().prev().css("zIndex", 3).animate({
		right : -27,
		opacity : 0
	},500,function(){
		$(tag).prev().prev().css("display" , "none")
	});
	$(tag).next().css({
		right : "300px",
		display : "block",
		opacity : 0
	}).animate({
		right : 273,
		opacity : 1
	},500);
}
// 图片滚动到第一张时，将最后一张移到到第一张之前。
function imgScrollFirst() {
	$(".ceight-pic-con1").prepend($(".ceight-pic-con1 li:last").outer());
	$(".ceight-pic-con1 li:first").css({
		right : "-27px",
		display : "block",
		opacity : 0
	}).animate({
		right : 0,
		opacity : 1
	},500);
	$(".ceight-pic-con1 li:last").remove();
	$(".ceight-pic-con1 li").click(imgScrollAll);
}
// 图片滚动到最后一张时，将第一张移到最后一张之后。
function imgScrollLast() {
	$(".ceight-pic-con1").append($(".ceight-pic-con1 li:first").outer());
	$(".ceight-pic-con1 li:last").css({
		right : "300px",
		display : "block",
		opacity : 0
	}).animate({
		right : 273,
		opacity : 1
	},500);
	$(".ceight-pic-con1 li:first").remove();
	$(".ceight-pic-con1 li").click(imgScrollAll);
}

// jQuery库增加outerHTML功能；
$.fn.outer = function(){
	return $('<div/>').append(this.clone()).html();
};