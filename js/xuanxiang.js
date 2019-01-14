window.onload = function(){
	function selectCard(topSelector,bottomSelector){
		let topList = document.querySelectorAll(topSelector);
		let bottomList = document.querySelectorAll(bottomSelector);
		topList.forEach((val,index)=>{
			val.onclick = function(){
				topList.forEach((ele,key)=>{
					ele.classList.remove("dongtai")
					bottomList[key].style.display="none";
				})
				topList[index].classList.add("dongtai")
				bottomList[index].style.display="block";
			}
		})
	}
	selectCard(".first-floor .top .jiadian-right li"," .first-floor .bottom .dianqi-right ul")
	selectCard(".second-floor .top .jiadian-right li"," .second-floor .bottom .dianqi-right ul")
	selectCard(".thirsd-floor .top .jiadian-right li"," .thirsd-floor .bottom .dianqi-right ul")
	selectCard(".foursd-floor .top .jiadian-right li"," .foursd-floor .bottom .dianqi-right ul")
	selectCard(".fithed-floor .top .jiadian-right li"," .fithed-floor .bottom .dianqi-right ul")
} 