/*
 * 大图滚动
 * mainElem是大图滚动scrollLeft要设置的标签，allNumber是要运动的次数，
 * changeStyle为对象，每次要改变的属性和值，同animate的第一个参数
 * time是每次换图间隔的时间，navInnerElem是导航的标签
 * leftElem是想左按钮的标签，rightElem是向右按钮的标签，
 * fun是回调函数，同时可用是获取显示的是第几个图片，需要在调用的函数中设置形参
 */
function slider(mainElem, allNumber, changeStyle, time, navInnerElem, leftElem, rightElem, fun){
	// var mainElem = $(everyElem).parent().parent();
	var ind = 0;
	var change ={};

	for(var prop in changeStyle){
		change[prop] = changeStyle[prop];
	}
	
	function goTo(num){
		for(var prop in change){
			if(typeof change[prop] == "string"){
				change[prop] = parseFloat(changeStyle[prop]) * num + "px";
			}else if(typeof change[prop] == "number"){
				change[prop] = changeStyle[prop] * num;
			}
		}

		$(mainElem).stop(true).animate(change, 300);
		
		if(typeof fun == "function"){
			fun(num);
		}else if(typeof fun == "string"){
			eval(fun);
		}	
	}

	if(time){ 
		console.log(time);
		var sliderTime = setInterval(function(){
			ind = (ind + 1) % allNumber;
			goTo(ind);
		},time);
	}

	if(leftElem){
		$(leftElem).click(function() {
			ind = (ind - 1 + allNumber) % allNumber;		
			goTo(ind);
		});
	}
	
	if(rightElem){
		$(rightElem).click(function() {
			ind = (ind + 1) % allNumber;
			goTo(ind);
		});
		mainElem.bind({
			mouseenter : function(){
				if(sliderTime){
					clearInterval(sliderTime);
				}
			},
			mouseleave :  function(){
				sliderTime = setInterval(function(){
					ind = (ind + 1) % allNumber;
					goTo(ind);
				},time);
			}
		})
	}
	
	if(navInnerElem){
		// var navElem = $(navInnerElem).parent();
		$(navInnerElem).click(function(){
			ind = $(navInnerElem).index($(this));
			goTo(ind);
		})
	}
}

/*
 *tab切换
 *navElem为导航外部标签，navInnerElem为切换的标签名
 *conElem为内容外部的标签，conInnerElem为内容部分的具体标签名
 *functions为执行基本tab切换后，要执行的函数
 */
function switchTab(navInnerElem, conInnerElem, fun){
	// var navElem = $(navInnerElem).parent();
	$(navInnerElem).bind({
		click : function(){
			var ind = $(navInnerElem).index($(this));
			$(conInnerElem).hide();
			$(conInnerElem).eq(ind).show();
			if(typeof fun == "function"){
				fun(ind);
			}else if(typeof fun == "string"){
				eval(fun);
			}
		}
	})
}