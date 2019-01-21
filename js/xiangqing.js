window.onload = function(){
	let lis= document.querySelectorAll(".xm-buy-box .clearfix .pro-choose .img-icon .img-left>ul>li");                   //轮播图
	let left= document.querySelector(".xm-buy-box .clearfix .pro-choose .img-icon .banner-btn1");                  //左按钮
	let right= document.querySelector(".xm-buy-box .clearfix .pro-choose .img-icon .banner-btn2");                  //右按钮
	let movebtn = document.querySelectorAll(".xm-buy-box .clearfix .pro-choose .img-icon .banner-point>div>div")                  //轮播点
	let box =document.querySelector(".xm-buy-box .clearfix .pro-choose .img-icon")                    //大盒子
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
			movebtn[index].classList.remove("dongline")               //去掉轮播点所有的选中
		})
		lis[n].classList.add("dongtu")                              //添加轮播图某一个的选中
		movebtn[n].classList.add("dongline")                          //添加轮播图某一个的选中
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
}