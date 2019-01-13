let ZH = document.querySelectorAll(".top ul li");
let SM = document.querySelectorAll(".bottom ul li");
ZH.forEach(function(val, index) {
	console.log(val);
	//全部添加点击事件
	val.onclick = function() {
		SM.forEach(function(val, key) {
			//去掉上面所有li的选择状态
			ZH[key].style.color = "rgba(0,0,0,0.6)";
			//全部隐藏下面的li,
			val.style.display = "none";
		});
		//显示对应的下面的li
		SM[index].style.display = "block";
		//给对应的上面的li上色
		ZH[index].style.color = "#ff6700";
	}
});
