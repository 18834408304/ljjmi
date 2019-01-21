window.onload = function(){
	
	
	//小米体重秤的选项卡
	function caini(parent){
		let fenbtn = document.querySelectorAll(".content .container .goods-list-box>ul "+parent+" .ticheng>div");
		let fenlis = document.querySelectorAll(".content .container .goods-list-box>ul "+parent+" .thumbs>ul>li");
		fenlis.forEach(function(val,index){
			val.onmouseover = function(){
				fenlis[index].classList.remove("dongtai");
				fenbtn.forEach(function(ele,key){
					ele.classList.remove("dongtu")
				})
				fenbtn[index].classList.add("dongtu")
			}
			fenlis[index].classList.add("dongtai")
		})
	}
	caini(".box1")
	caini(".box2")
	caini(".box3")
	
	//猜你喜欢的轮播图
	let cainiDian = document.querySelectorAll(".content1 .container .xm-pagers>div>div")
	let cainibigbox = document.querySelector(".content1 .container .con-xia .ping>ul");
	let cainin = 0;
	cainiDian.forEach(function(value,index){
		value.onclick=(function(){
			cainin=index;
			move();
		})
	})
	function move(){
		if(cainin>cainin.length-1){
			cainin=cainin.length-1;
		}else if(cainin<0){
			cainin=0;
		}else{
			cainibigbox.style.left =-1226*cainin+"px";
			cainiDian.forEach(function(val,key){
				val.classList.remove("active")
				cainiDian[key].style.cursor = "pointer";
			})
			cainiDian[cainin].classList.add("active")
			cainiDian[cainin].style.cursor = "default";
		}
	}
}