$(function() {
	// 产品分别显示隐藏
	$("body").on("click", ".product_fication", function(){
		var _this = $(this);
		_this.addClass('current').siblings().removeClass('current');
		if(_this.find(".iconfont").hasClass('icon-xiangshangjiantou')) {
			_this.find(".iconfont").addClass("icon-down").removeClass("icon-xiangshangjiantou");
			$(".product_type,.mask_box").show();
		} else {
			_this.find(".iconfont").addClass("icon-xiangshangjiantou").removeClass("icon-down");
			$(".product_type,.mask_box").hide();
		}
	});
	// 产品分类内容选择
	$("body").on("click", ".product_row", function() {
		var _this = $(this);
			_this.addClass('product_type_select').siblings().removeClass('product_type_select');
			_this.find(".iconfont").addClass('icon-duihao');
			_this.siblings().find(".iconfont").removeClass('icon-duihao');
			$(".product_type,.mask_box").hide();
			$(".product_fication").find(".iconfont").removeClass("icon-down").addClass("icon-xiangshangjiantou");
	});
	$('.to-top').toTop(); //返回顶部

	//搜索框显示隐藏
	$("body").on("click", ".icon-sousuo", function(){
		var _this = $(this);
		_this.closest(".pass_head").find(".search_txt").animate({"width": "5.5rem"}, 1000).show();
	});

	/*
	 *	销量排行
	**/ 
	$("body").on("click", ".sales_ranking", function() {
		var _this = $(this);
		_this.addClass('current').siblings().removeClass('current');
		
		if(_this.find(".iconfont").hasClass('icon-xiangshangjiantou')) {
			_this.find(".iconfont").addClass('icon-down').removeClass('icon-xiangshangjiantou');
		} else {
			_this.find(".iconfont").addClass('icon-xiangshangjiantou').removeClass('icon-down');
		}
	});

	// 横竖排列
	$("body").on("click", ".typesetting", function(){
		var _this = $(this),
			_icon = _this.find(".iconfont");
		_this.addClass('current').siblings().removeClass('current');

		if(_icon.hasClass('icon-liebiao')) {
			$(".product_list").removeClass('vertical').addClass('horizontal');
			_icon.addClass('icon-tubiao_kuaizhuangpailie').removeClass('icon-liebiao');
			var w= $(".horizontal .product_item .product_img img").width();
			$(".horizontal .product_item .product_img img").height(w);
		} else {
			$(".product_list").removeClass('horizontal').addClass('vertical');
			_icon.addClass('icon-liebiao').removeClass('icon-tubiao_kuaizhuangpailie');
			$(".vertical .product_item .product_img img").css("height", "1.98rem");
		}
	});
	/*
	*	菜单左右滑动效果
	**/ 
	$('.carousel-image1').CarouselImage({
		num: $('.carousel-image1 .carousel-num'),
		width: '100%',
		height: 150
	});
});