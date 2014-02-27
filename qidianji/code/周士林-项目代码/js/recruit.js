var recValues = document.getElementById("rec-values"),
	recAttr = document.getElementById("rec-attr"),
	recMore1 = document.getElementById("rec-more1"),
	recMore2 = document.getElementById("rec-more2"),
	recLocation = document.getElementById("rec-location"),
	recTrade = document.getElementById("rec-trade"),
	recLi = recAttr.getElementsByTagName("li"),
	recDelete = recValues.getElementsByTagName("b"),
	recCon = document.getElementById("rec-con"),
	recLis = recCon.getElementsByTagName("li"),
	recBtns = recCon.getElementsByTagName("a");

recMore1.onclick = function (){
	recLocation.style.height = (recLocation.style.height == (40 + "px")) ?  ("auto") : (40 + "px");	
}
recMore2.onclick = function (){
	recTrade.style.height = (recTrade.style.height == (40 + "px")) ?  ("auto") : (40 + "px");
}

for (var i = 0; i < recLi.length; i++) {
	recLi[i].index = i;
	recLi[i].onclick = function (){
		var recText = recLi[this.index].parentNode.parentNode.firstChild.nextSibling.innerHTML;
		// IE7
		if (recText == "") {
			recText = recLi[this.index].parentNode.parentNode.firstChild.innerHTML;
		}
		recValues.innerHTML += "<li><a href='#' title=''><span>"+recText+":</span><strong>"+recLi[this.index].firstChild.innerHTML+"</strong>"+"<b></b>"+"</a></li>"
	}
};

for (var i = 0; i < recLi.length; i++) {
	recLi[i].onmouseover = function (){
		for (var i = 0; i < recDelete.length; i++) {
			recDelete[i].index = i;
			recDelete[i].onclick = function (){
				var recX = recDelete[this.index].parentNode.parentNode;
				recX.parentNode.removeChild(recX);
			}
		};
	}
};

for (var i = 0; i < recLis.length; i++) {
	recLis[i].index = i;
	recLis[i].onmouseover = function (){
		for (var i = 0; i < recBtns.length; i++) {
			recBtns[i].style.display = "none";
		};
		recBtns[this.index].style.display = "block";
	}
};

for (var i = 0; i < recBtns.length; i++) {
	recBtns[i].index = i;
	recBtns[i].onclick = function (){
		recLis[this.index].style.height = 1230 + "px";
		recLis[this.index].style.background = "#fffcf7";
		recBtns[this.index].innerHTML = "注册";

	}
};
