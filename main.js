const selectElement = function(element){
	return document.querySelector(element);
}

let barIcon = selectElement('.fa-bars');
let timesIcon = selectElement('.fa-times');

$(".fas.fa-bars").on("click",function(){
	$(this).css("display","none");
	$(".fas.fa-times").css("display","block");
	$(".res-menu").css("display","block");
	$(".main-page-vavci").css("display","none");
});

$(".fas.fa-times").on("click",function(){
	$(this).css("display","none");
	$(".fas.fa-bars").css("display","block");
	$(".res-menu").css("display","none");
	$(".main-page-vavci").css("display","block");
});

$("li.res-nav-bar-item").on("mouseover",function(){
    $(this).children().css("color","#FFF");
});

$("li.res-nav-bar-item").on("mouseout",function(){
    $(this).children().css("color","#707070");
});