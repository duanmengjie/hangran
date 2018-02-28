$(function() {
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
// 选择地址
var json = [{
	"id": 1,
	"name": "浙江省",
	"child": [{
		"id": "1",
		"name": "杭州市",
		"child": [{
			"id": 1,
			"name": "滨江区"
		}, {
			"id": 2,
			"name": "西湖区"
		}, {
			"id": 3,
			"name": "余杭区"
		}, {
			"id": 4,
			"name": "留下区"
		}]
	}, {
		"id": "2",
		"name": "宁波市",
		"child": []
	}, {
		"id": "3",
		"name": "温州市",
		"child": []
	}]
}, {
	"id": 2,
	"name": "江苏省",
	"child": [{
		"id": "1",
		"name": "南京",
		"child": [{
			"id": 1,
			"name": "解放区"
		}]
	}]
}, {
	"id": 3,
	"name": "湖北省"
}];
var selectArea = new MobileSelectArea();
selectArea.init({ trigger: '#txt_area4', data: json, default: 0, position: "bottom" });