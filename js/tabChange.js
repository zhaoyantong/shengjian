//01初始化
window.onload=function(){
	var ul=document.getElementsByClassName("left1-right");//获取ul
	var li=ul.getElementsByTagName("h2"); //li数组
	var div=ul.getElementsByTagName("ul"); //li数组
	for(var i=0; i<li.length; i++){
		li[i].index=i;     //设置索引值
		li[i].onclick=function(){
			for(var j=0; j<li.length; j++){
				li[j].className="normal"; 
				div[j].style.display="none";
			}
			li[this.index].className="active";
			div[this.index].style.display="block";
		}	
	}
}
