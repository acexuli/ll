// JavaScript Document

/* 三面折叠 */
function wf(){
  $(".sanwrap1 .sandw1").animate({marginLeft:-220},1000,function(){
	  $(".sanwrap1 .sandw1 a:eq(0)").appendTo($(".sanwrap1 .sandw1:last"))
	  $(".sanwrap1 .sandw1").css("margin-left",0)
	  })
	  
	    $(".sanwrap2 .sandw1").animate({marginLeft:-220},1000,function(){
	  $(".sanwrap2 .sandw1 a:eq(0)").appendTo($(".sanwrap2 .sandw1:last"))
	  $(".sanwrap2 .sandw1").css("margin-left",0)
	  })
	  
	    $(".sanwrap3 .sandw1").animate({marginLeft:-220},1000,function(){
	  $(".sanwrap3 .sandw1 a:eq(0)").appendTo($(".sanwrap3 .sandw1:last"))
	  $(".sanwrap3 .sandw1").css("margin-left",0)
	  })	
}
setInterval(wf,2000)
/* hover切换 */
$(function(){
$(".conpic:eq(0)").mouseenter(function(){
var a=$(".l").width()
if(a==0){
  $(".l").stop().animate({width:140},1000)
  $(".r").stop().animate({width:140},1000)
	}else{
  $(".t").stop().animate({height:0.1},1000)
  $(".b").stop().animate({height:0.1},1000) 
	}	
	})
$(".conpic:eq(0)").mouseleave(function(){
var b=$(".t").height();
if(b==0){
  $(".t").stop().animate({height:85},1000).css("z-index",6)
  $(".b").stop().animate({height:85},1000).css("z-index",6)  
	}else{
	$(".l").stop().animate({width:0},1000)
  $(".r").stop().animate({width:0},1000)
  	  $(".t").stop().animate({height:0},1000)
  $(".b").stop().animate({height:0},1000) 
		}
})
})

/* banner */
var ban1=0;
function ban(){
if(ban1<2){
$(".ban").eq(ban1).show().siblings().hide()

	ban1++
}else{
	ban1=0
	}
}

var bb = setInterval(ban,2400)



	var a=0;
function lun(){

	if(a<3){
	 $(".banner img").eq(a).fadeIn().siblings("img").stop().fadeOut()
	 $(".banner li").eq(a).css({"background":"#000"}).siblings().css({"background":"#D4D0C8"})
	 a++;
	}else{
		a=0;
		}
}
t=setInterval(lun,1500);

/* 注册 */
$(function(){
$("#zc").click(function(){
  $(".dlbox").show(500)	
})
$(".tczc").click(function(){
  $(".dlbox").hide(500)	
})

})














