$(function(){
    //密码的可见与不可见
    $("body").on("click", "#password_icon", function(){
    	var _this = $(this);
        if(_this.hasClass('icon-iconfont32pxmimabukejian')){
            _this.addClass("icon-yanjing").removeClass('icon-iconfont32pxmimabukejian');
            _this.closest('li').find(".login_inpt").attr("type", "text");
        }else{
            _this.addClass("icon-iconfont32pxmimabukejian").removeClass('icon-yanjing');
            _this.closest('li').find(".login_inpt").attr("type", "password");
        }
    });
    // 注册
    $("body").on("click", ".agree", function(){
        var _this = $(this);
        if(_this.find(".iconfont").hasClass('icon-radio02')){
            _this.find(".iconfont").addClass("icon-radio").removeClass('icon-radio02');
        }else{
            _this.find(".iconfont").addClass("icon-radio02").removeClass('icon-radio');
        }
    });   
});
/* 声明一个数组用来存input值 */
var array = ["", "", ""];
/*方法调用*/
inputFn("li:nth-child(1) .login_inpt", 0);
inputFn("li:nth-child(2) .login_inpt", 1);
inputFn("li:nth-child(3) .login_inpt", 2);
/* 方法封装 */
/*键盘弹起时实时生效*/
function inputFn(ele, num) {
    $(ele).keyup(function(){
        var val = $(this).val().trim();
        console.log(val);
        array[num] = val;
        inputArray();
    });
}
/*遍历数组，判断input值是否存在于数组中*/
function inputArray() {
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        //  如果值不在数组中 就返回 并 去掉颜色
        if (array[i] == "" ||　array[i] == null) {
            $(".pass_btn").removeClass("confirm02");
            console.log(array[i] + "无法提交" + i)
            return;
        }
    }
    $(".pass_btn").addClass("confirm02");
}