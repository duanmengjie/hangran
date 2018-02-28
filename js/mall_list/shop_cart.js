$(function() {
	// 单选
	$("body").on("click", ".agree", function(){
        var _this = $(this);
        if(_this.find(".iconfont").hasClass('icon-radio02')){
            _this.find(".iconfont").addClass("icon-radio").removeClass('icon-radio02');
        }else{
            _this.find(".iconfont").addClass("icon-radio02").removeClass('icon-radio');
        }
    });
    // 多选
	$("body").on("click", ".single", function(){
        var _this = $(this).find(".iconfont");
        var _sel = $(".shop_row .agree").find(".icon-radio");
        if(_sel.length == $(".shop_row .agree").length) {
        	$(".shop_footer .all .iconfont").addClass('icon-radio').removeClass('icon-radio02');
        } else {
        	$(".shop_footer .all .iconfont").addClass('icon-radio02').removeClass('icon-radio');
        }
    });
     // 全选
     $("body").on("click", ".shop_footer .all", function(){
     	var _radio = $(this).find(".iconfont");
     	if(_radio.hasClass('icon-radio02')){
     		$(".shop_row .agree .iconfont").addClass('icon-radio02').removeClass('icon-radio');
     	} else {
     		$(".shop_row .agree .iconfont").addClass('icon-radio').removeClass('icon-radio02');
     	}
     });
     // 数量减去
     $("body").on("click", ".shop_num_cut", function() {
     	var _this = $(this),
     		_num = _this.closest(".shop_num").find(".shop_num_txt");
     		if(_num.text() == 1) {
     			_this.closest(".shop_num").find(".shop_num_txt").text(1);
     		}else{
     			_this.closest(".shop_num").find(".shop_num_txt").text(_num.text() - 1);
     		}
     });
     // 数量增加
     $("body").on("click", ".shop_num_add", function() {
     	var _this = $(this),
     		_num = _this.closest(".shop_num").find(".shop_num_txt");
     		if(_num.text() >= 999) {
     			_this.closest(".shop_num").find(".shop_num_txt").text(999);
     		}else{
     			_this.closest(".shop_num").find(".shop_num_txt").text(parseInt(_num.text()) + 1);
     		}
     });
     // 左边出现删除按钮
     $("body").on("swipeleft", ".shop_row", function(e) {
     	var _this = $(this);
			_this.animate({
				"left": "-1rem"
			});
			_this.find(".remove_mask").show();
			e.preventDefault();
     });
     $("body").on("swiperight", ".shop_row", function(e) {
     	var _this = $(this);
			_this.animate({
				"left": "0"
			},function() {
				_this.find(".remove_mask").hide();
			});
			e.preventDefault();
     });
     // 删除事件
     $("body").on("vclick", ".remove_btn", function() {
     	var _this = $(this);
     	_this.closest(".shop_row").remove();
     });
     // 编辑
     $("body").on("vclick", ".edit", function() {
        var _this = $(this);
        if(_this.hasClass('edit')) {
            $(".shop_nav").css("width", "3.2rem");
            $(".number").hide();
            $(".shop_num").show();
            _this.text("完成");
            _this.addClass('com').removeClass('edit');
        }
     });
     $("body").on("vclick", ".com", function(){
        var _this = $(this);
        _this.addClass('edit').removeClass('com');
        $(".shop_nav").css("width", "4rem");
        $(".number").show();
        $(".shop_num").hide();
        _this.text("编辑");
     });
});