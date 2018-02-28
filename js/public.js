$(function(){
    var initFontSize = function() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    };
    initFontSize();  
    
	/*
	*	底部导航
	**/ 
	$("body").on("click", ".mymenu .mymenu_row", function() {
		var _this = $(this);
		$(".mymenu .mymenu_row").removeClass('active');
		_this.addClass("active");
	});
});