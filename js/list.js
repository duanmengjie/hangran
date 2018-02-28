$(function() {
	// 充值记录显示隐藏
	$("body").on("click", ".payment_head", function(){
		var _this = $(this);
		if(_this.find(".iconfont").hasClass('icon-down')) {
			_this.find(".iconfont").addClass('icon-youjiantou').removeClass('icon-down');
			_this.closest('.payment_main').find(".records").hide();
		} else {
			_this.find(".iconfont").addClass('icon-down').removeClass('icon-youjiantou');
			_this.closest('.payment_main').find(".records").show();
		}
	});
	// 选择支付方式
	$("body").on("click", ".payment_change_row", function(){
        var _this = $(this);
        $(".payment_change_row").find(".agree .iconfont").removeClass('icon-radio').addClass("icon-radio02");
        _this.find(".agree .iconfont").addClass("icon-radio").removeClass('icon-radio02');
    });

    // 快速缴费-用户编号
    $("body").on("click", ".client_num", function() {
    	var _this = $(this);
    	if(_this.find(".iconfont").hasClass('icon-down')){
    		_this.find(".client_list .client_main").children().hide();
    		_this.find(".client_list .client_main span").eq(0).show();
	    	_this.find(".iconfont").addClass('icon-youjiantou').removeClass('icon-down');
    	} else {
    		_this.find(".client_list .client_main").children().show();
	    	_this.find(".iconfont").addClass('icon-down').removeClass('icon-youjiantou');
    	}
    });

    // 已绑定用户
    $("body").on("click", ".address_row", function() {
    	var _this = $(this);
    	$(".address_row").find(".iconfont").removeClass('icon-radio').addClass("icon-radio02");
        _this.find(".iconfont").addClass("icon-radio").removeClass('icon-radio02');
    });
});	