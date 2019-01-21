window.onload = function(){
	
	
	//大轮播图
	let lis= document.querySelectorAll(".banner-tu>ul>li");                   //轮播图
	let left= document.querySelector(".banner-btn1");                  //左按钮
	let right= document.querySelector(".banner-btn2");                  //右按钮
	let movebtn = document.querySelectorAll(".banner-point>div>div")                  //轮播点
	let box =document.querySelector(".banner")                    //大盒子
	let n = 0;
	let size = movebtn.length-1; 
	function move(){                                                //封装move函数
		if(n>size){
			n = 0;                                                 //判断n>size时，n=0
		}
		if(n<0){
			n=size;                                                //判断n<0时，n=size
		}
		lis.forEach(function(val,index){                            //遍历轮播图
			val.classList.remove("dongtu")                          //去掉轮播图所有的选中
			movebtn[index].classList.remove("dongdian")               //去掉轮播点所有的选中
		})
		lis[n].classList.add("dongtu")                              //添加轮播图某一个的选中
		movebtn[n].classList.add("dongdian")                          //添加轮播图某一个的选中
	}
	box.onmouseover = function(){
		clearInterval(time);                                       //鼠标移入时给大盒子停止setInterval()的设置的定时器
	}
	box.onmouseout = function(){
		time = setInterval(function(){
			n++;                                                   //鼠标移出时给大盒子设置再一次n++次循环轮播图赋值给time变量
			move();
		},2000)
	}
	let time = setInterval(function(){
		n++;                                                       //给大盒子设置2秒后执行回调函数，执行n++次
		move();
	},2000)
	right.onclick = function(){
		n++;                                                       //给右箭头设置它的单击事件
		move();
	}
	left.onclick = function(){
		n--;                                                       //给右箭头设置它的单击事件
		move();
	}
	movebtn.forEach(function(val,index){
		val.onclick = function(){
			n = index;                                             //遍历轮播点，给轮播点设置它每一个的单击事件
			move();
		}
	})
	
	
	
	//家电选项卡
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
	
	
	
	
	//闪购轮播
	let flasbtnleft = document.querySelector(".shangou-btn .btn-left");
	let flasbtnright = document.querySelector(".shangou-btn .btn-right");
	let flasbigbox = document.querySelector(".gou-right ul");
	let flaslis = document.querySelectorAll(".gou-right ul li");
	let flasn = 0;
	let flaswidth = (234+14)*4;
	let flassize = flaslis.length-4;
	function flasmove(){
		if(flasn>flassize){
			flasn = flassize;
		}
		if(flasn<0){
			flasn = 0;
		}
		if(flasn==flassize){
			flasbtnright.style.cursor = "default"
			flasbtnright.style.color = "#e9e9e9"
		}else{
			flasbtnright.style.cursor = "pointer"
			flasbtnright.style.color = "#333"
		} 
		if(flasn==0){
			flasbtnleft.style.cursor = "default"
			flasbtnleft.style.color = "#e9e9e9"
		}else{
			flasbtnleft.style.cursor = "pointer"
			flasbtnleft.style.color = "#333"
		}
		flasbigbox.style.left =-248*flasn+"px";
	}
	flasbtnright.onclick = function(){
		flasn = flasn +4;
		flasmove();
	}
	flasbtnleft.onclick = function(){
		flasn = flasn - 4;
		flasmove();
	} 
	
	
	
	//为你推荐选项卡
	let tuibtnleft = document.querySelector(".tuijian-btn .btn-left");
	let tuibtnright = document.querySelector(".tuijian-btn .btn-right");
	let tuibigbox = document.querySelector(".tuijian .bottom .ping>ul");
	let tuilis = document.querySelectorAll(".tuijian .bottom .ping>ul>li");
	let tuin = 0;
	let tuiwidth = (234+14)*5;
	let tuisize = tuilis.length-5;
	function tuimove(){
		if(tuin>tuisize){
			tuin = tuisize;
		}
		if(tuin<0){
			tuin = 0;
		}
		if(tuin==tuisize){
			tuibtnright.style.cursor = "default"
			tuibtnright.style.color = "#e9e9e9"
		}else{
			tuibtnright.style.cursor = "pointer"
			tuibtnright.style.color = "#333"
		} 
		if(tuin==0){
			tuibtnleft.style.cursor = "default"
			tuibtnleft.style.color = "#e9e9e9"
		}else{
			tuibtnleft.style.cursor = "pointer"
			tuibtnleft.style.color = "#333"
		}
		tuibigbox.style.left =-248*tuin+"px";
	}
	tuibtnright.onclick = function(){
		tuin = tuin +5;
		tuimove();
	}
	tuibtnleft.onclick = function(){
		tuin = tuin - 5;
		tuimove();
	} 
	
	
	//内容轮播
	function neirong(parent){
		let biebox = document.querySelector(".substance .neirong-2>ul "+parent+" .hali .middle")
		let leftbtn = document.querySelector(".substance .neirong-2>ul "+parent+" .control-1 ")
		let yuanbtn = document.querySelectorAll(".substance .neirong-2>ul "+parent+" .xm-pagers div div")
		let rightbtn = document.querySelector(".substance .neirong-2>ul "+parent+" .control-2")
		let neirongn = 0;              //记录位置
		rightbtn.onclick = function(){
			neirongn++;
			move()
		}
		leftbtn.onclick = function(){
			neirongn--;
			move()
		}
		yuanbtn.forEach(function(value,index){
			value.onclick=(function(){
				neirongn=index;
				move();
			})
		})
		function move(){
			if(neirongn>yuanbtn.length-1){
				neirongn=yuanbtn.length-1;
			}else if(neirongn<0){
				neirongn=0;
			}else{
				if(neirongn==yuanbtn.length-1){
					rightbtn.style.cursor = "default"
				}else{
					rightbtn.style.cursor = "pointer"
				} 
				if(neirongn==0){
					leftbtn.style.cursor = "default"
				}else{
					leftbtn.style.cursor = "pointer"
				} 
				biebox.style.left = -neirongn*296+"px";
				yuanbtn.forEach(function(val){
					val.classList.remove("active")
				})
				yuanbtn[neirongn].classList.add("active")
			}
		}
	}                      //内容轮播index.html
	neirong(".box1");
	neirong(".box2");
	neirong(".box3");
	neirong(".box4");
	
	
	//tab栏的隐藏显示
	let barx = document.querySelector(".bar-x");
	let lc1 = document.querySelector(".lc1");
	let root = document.documentElement;
	if(root.scrollTop >= lc1.offsetTop){
		barx.style.display = "block";
	}
	window.onscroll = function(){
		if(root.scrollTop >= lc1.offsetTop){
			 setTimeout(function(){
				if(root === document.documentElement&&root.scrollTop != 0){
					barx.style.display = "block";
				}
			},1000)
		}else if(root.scrollTop == 0){
			barx.style.display = "none";
		}
	}
	
	
	
	//search的下拉列表
	let searRight = document.querySelector(".search");
	let inputD = document.querySelector(".search-wenben input");
	let searLeft = document.querySelector(".search-wenben");
	let textLeft = document.querySelector(".search-ts");
	let lisXl = document.querySelector(".search-wenben ul");
	inputD.onfocus = function(){
		searRight.style.borderColor = "#ff6700";
		textLeft.style.display = "none";
		lisXl.style.display = "block";
		searLeft.style.borderColor = "#ff6700";
	}
	inputD.onblur = function(){
		searRight.style.borderColor = "#e0e0e0";
		textLeft.style.display = "block";
		lisXl.style.display = "none";
		searLeft.style.borderColor = "#e0e0e0";
	}
	
	
	//logo右侧文字下拉
	let headerLis = document.querySelectorAll(".MI-left-text span");
	let xialaLis = document.querySelector(".header-nav");
	let mihead = document.querySelector(".MI");
	let logospeed = 5;
	headerLis.forEach(function(val,index){
		val.onmouseover = function(){
			setTimeout(function(){
				xialaLis.style.transform = "translateY(100px)";
				xialaLis.style.display = "block";
			},500)
		}
		val.onmouseout = function(){
			setTimeout(function(){
				xialaLis.style.transform = "translateY(-130px)";
				xialaLis.style.display = "none";
			},500)
		}
	})
	
} 