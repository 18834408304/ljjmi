let dian = document.querySelector(".box1");
let zhezhao = document.querySelector(".mask");
let biao = document.querySelector(".Biaoge");
dian.onclick = function(){
	zhezhao.style.display="block";
	biao.style.top="65px";
}

let quxiao = document.querySelector(".ic-box");
quxiao.onclick = function(){
	zhezhao.style.display="none";
	biao.style.top="-550px";
}