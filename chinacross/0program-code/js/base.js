jQuery.extend(jQuery.easing, {
	easeOutBack: function(c, a, e, d, b, f) {
		void 0 == f && (f = 1.70158);
		return d * ((a = a / b - 1) * a * ((f + 1) * a + f) + 1) + e
	}
});

function initHeader(headerNavInd) {
	if (!headerNavInd) {
		headerNavInd = 0;
	}
	var headerScrollInd = 0;
	var footerImg = 0;
	var headerTime = setInterval(function() {
		$(".header-scroll img").eq(headerScrollInd).fadeOut(600);
		headerScrollInd = (headerScrollInd + 1) % $(".header-scroll img").length;
		$(".header-scroll img").eq(headerScrollInd).fadeIn(600);
	}, 3000);
	selectNav(headerNavInd);

	function selectNav(num) {
		$(".header-nav-bg").css({
			"left": num * 117 + "px"
		});
		headerNavInd = num;
	}

	$(".header ul").bind({
		mouseleave: function() {
			$(".header-nav-bg").stop(true).animate({"left": headerNavInd * 117 + "px"}, 300, "easeOutBack");
			// moveTo($(".header-nav-bg"), "left", headerNavInd * 117 , 20, Tween.Back.easeOut)
		}
	})

	$(".header-nav ul li").bind({
		mouseenter: function() {
			$(".header-nav-bg").stop(true).animate({
				"left": $(".header-nav ul li").index($(this)) * 117 + "px"
			}, 300, "easeOutBack");
			// moveTo($(".header-nav-bg"), "left", $(".header-nav ul li").index($(this)) * 117 , 50, Tween.Back.easeOut)
		}
	})

	// footer scroll
	var footerTime = setInterval(function() {
		$(".footer-img").stop(true).animate({
			scrollTop: footerImg * 75 + "px"
		}, 300);
		footerImg = (footerImg + 1) % $(".footer-img div").length;
	}, 1000);


	// gotop
	window.onscroll = function() {
		var value = document.documentElement.scrollTop || document.body.scrollTop;

		if (value > 0) {
			$(".goTop").show()
		} else {
			$(".goTop").hide();
		}
	}

	$(".goTop").click(function(event) {
		if (document.documentElement.scrollTop) {
			$(document.documentElement).animate({
				scrollTop: 0
			}, 300);
		}
		if (document.body.scrollTop) {
			$(document.body).animate({
				scrollTop: 0
			}, 300);
		}
	})
};

// 可以带有tween的渐变动画效果
function moveTo(elem, prop, end, duration, tween) {
	elem = $(elem);
	var start = getProp(elem, prop),
		changeValue = getNumber(end) - start, // tween.c
		n = 0, // tween.t
		speed = changeValue / duration,
		tProp = "_t_" + prop,
		propValue = start;

	if (elem[tProp]) {
		clearTime(elem[tProp]);
	}

	elem[tProp] = setTimeout(change, 17);

	function change() {

		if (elem[tProp]) {
			clearTimeout(elem[tProp]);
		}

		elem[tProp] = setTimeout(change, 17);

		if (tween) {
			n++;
			propValue = tween(n, start, changeValue, duration);
			if (n > duration) {
				clearTimeout(elem[tProp])
			}
		} else {
			propValue += speed;

			if ((speed > 0 && propValue >= end) ||
				(speed < 0 && propValue <= end)) {
				propValue = end;
				clearTimeout(elem[tProp]);
			}
		}

		if (prop in document.body.style) {
			elem.css(prop, propValue + "px");
		} else if (prop == "scrollTop") {
			elem.scrollTop(propValue);
		} else if (prop == "scrollLeft") {
			elem.scrollLeft(propValue);
		} else {
			elem.attr(prop) = propValue;
		}
	}

}

// 获得标签的属性值或样式值的数字
function getProp(elem, prop) {
	if (!elem) {
		return false;
	}
	var value = 0;

	if (prop in document.body.style) {
		value = $(elem).css(prop);
	} else if (prop == "scrollTop") {
		value = elem.scrollTop();
	} else if (prop == "scrollLeft") {
		value = elem.scrollLeft();
	} else {
		value = $(elem).attr(prop);
	}

	value = getNumber(value);
	return value;
}

// 获取字符串中的数字
function getNumber(value) {
	value = parseFloat(value);
	return value;
}
/*
 * 大图滚动
 * mainElem是大图滚动scrollLeft要设置的标签，allNumber是要运动的次数，
 * changeStyle为对象，每次要改变的属性和值，同animate的第一个参数
 * time是每次换图间隔的时间，navInnerElem是导航的标签
 * leftElem是想左按钮的标签，rightElem是向右按钮的标签，
 * fun是回调函数，同时可用是获取显示的是第几个图片，需要在调用的函数中设置形参
 */
function slider(mainElem, allNumber, changeStyle, time, navInnerElem, leftElem, rightElem, fun) {
	// var mainElem = $(everyElem).parent().parent();
	var ind = 0;
	var change = {};

	for (var prop in changeStyle) {
		change[prop] = changeStyle[prop];
	}

	function goTo(num) {
		for (var prop in change) {
			if (typeof change[prop] == "string") {
				change[prop] = parseFloat(changeStyle[prop]) * num + "px";
			} else if (typeof change[prop] == "number") {
				change[prop] = changeStyle[prop] * num;
			}
		}

		$(mainElem).stop(true).animate(change, 300);

		if (typeof fun == "function") {
			fun(num);
		} else if (typeof fun == "string") {
			eval(fun);
		}
	}

	if (time) {

		var sliderTime = setInterval(function() {
			ind = (ind + 1) % allNumber;
			goTo(ind);
		}, time);
	}

	if (leftElem) {
		$(leftElem).click(function() {
			ind = (ind - 1 + allNumber) % allNumber;
			goTo(ind);
		});
	}

	if (rightElem) {
		$(rightElem).click(function() {
			ind = (ind + 1) % allNumber;
			goTo(ind);
		});

	}

	if (navInnerElem) {
		// var navElem = $(navInnerElem).parent();
		$(navInnerElem).click(function() {
			ind = $(navInnerElem).index($(this));
			goTo(ind);
		})
	}
	mainElem.bind({
		mouseenter: function() {
			if (sliderTime) {
				clearInterval(sliderTime);
			}
		},
		mouseleave: function() {
			sliderTime = setInterval(function() {
				ind = (ind + 1) % allNumber;
				goTo(ind);
			}, time);
		}
	})
}

/*
 *tab切换
 *navElem为导航外部标签，navInnerElem为切换的标签名
 *conElem为内容外部的标签，conInnerElem为内容部分的具体标签名
 *functions为执行基本tab切换后，要执行的函数
 */
function switchTab(navInnerElem, conInnerElem, fun) {
	// var navElem = $(navInnerElem).parent();
	$(navInnerElem).bind({
		click: function() {
			var ind = $(navInnerElem).index($(this));
			$(conInnerElem).hide();
			$(conInnerElem).eq(ind).show();
			if (typeof fun == "function") {
				fun(ind);
			} else if (typeof fun == "string") {
				eval(fun);
			}
		}
	})
}

function er(e, t, n) {
	var r, i, o = 0,
		a = Gn.length,
		s = x.Deferred().always(function() {
			delete l.elem
		}),
		l = function() {
			if (i) return !1;
			var t = Xn || Kn(),
				n = Math.max(0, u.startTime + u.duration - t),
				r = n / u.duration || 0,
				o = 1 - r,
				a = 0,
				l = u.tweens.length;
			for (; l > a; a++) u.tweens[a].run(o);
			return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
		}, u = s.promise({
			elem: e,
			props: x.extend({}, t),
			opts: x.extend(!0, {
				specialEasing: {}
			}, n),
			originalProperties: t,
			originalOptions: n,
			startTime: Xn || Kn(),
			duration: n.duration,
			tweens: [],
			createTween: function(t, n) {
				var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
				return u.tweens.push(r), r
			},
			stop: function(t) {
				var n = 0,
					r = t ? u.tweens.length : 0;
				if (i) return this;
				for (i = !0; r > n; n++) u.tweens[n].run(1);
				return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
			}
		}),
		c = u.props;
	for (tr(c, u.opts.specialEasing); a > o; o++)
		if (r = Gn[o].call(u, e, c, u.opts)) return r;
	return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
		elem: e,
		anim: u,
		queue: u.opts.queue
	})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}