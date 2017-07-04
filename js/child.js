$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.2+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.2+"px"});
	$('#form .name').focus(function(){
		$(this).attr('placeholder','');
	});
	$('#form .name').blur(function(){
		$(this).attr('placeholder','请输入姓名');
	});
	$('#height .tall').focus(function(){
		$(this).attr('placeholder','');
	});
	$('#height .tall').blur(function(){
		$(this).attr('placeholder','请输入数字');
	});
	$('#height .fat').focus(function(){
		$(this).attr('placeholder','');
	});
	$('#height .fat').blur(function(){
		$(this).attr('placeholder','请输入数字');
	});

	//时间线，tab切换
	var n = 0;
	$('.progress .num div').click(function(){
		var index = $(this).index();
		n=index;
		change();
	});
	$('.progress .text div').click(function(){
		var index = $(this).index();
		n=index;
		change();
	});
	function change(){
		$('.progress .num div').eq(n).css({'color':'#FF329A'}).siblings().css({'color':'#333'});
		$('.progress .text div').eq(n).css({'color':'#FF329A'}).siblings().css({'color':'#333'});
		$('.change .block').eq(n).css('display','block').siblings().css('display','none');
	}


	//新增,保存
	$('.ido p').click(function(){
		$('.ido .add').css('backgroundColor','#E557D1');
		$('.ido .add').text('保 存');
		$('.ido .info').css('display','block');
	});

	$('.yao .tit').click(function(){
		$('.yao .add').css('backgroundColor','#E557D1');
		$('.yao .add').text('保 存');
		$('.yao .infos').css('display','block');
	});

	$('.lu p').click(function(){
		$('.lu .add').css('backgroundColor','#E557D1');
		$('.lu .add').text('保 存');
		$('.lu .info').css('display','block');
		$('.lu .want').text('添加过敏源');
	});

	//成长记录曲线图
	var c = 0;
	$('.line .cmkg div').click(function(){
		var index = $(this).index();
		c=index;
		tab();
	})
	function tab(){
		$('.line .cmkg div').eq(c).css({'color':'#fff','backgroundColor':'#CF24AA'}).siblings().css({'color':'#333','backgroundColor':'#fff'});
	}

	//成长记录空白
	$('.do p').click(function(){
		$('.do .add').text('保存');
		$('.lis').css('display','none');
		$('.do .info').css('display','block');
	});

	//过敏空白
	$('.add-min p').click(function(){
		$('.add-min .add').text('保存');
		$('.bj').css('display','none');
		$('.add-min .info').css('display','block');
	});

	//病历空白
	$('.me p').click(function(){
		$('.me .new').text('保存');
		$('.here').css('display','none');
		$('.me .info').css('display','block');
	});

	//首页表单提交验证
	$('.care').click(function(){
		var _name = $('#form .name').val();
		var _day = $('#form .xuan').val();
		var _sex = $('input[name=sexs]:checked').val();
		if(_name==''||_day==''||_sex==''){
			$('.remind').fadeIn().delay(2000).fadeOut();
			return false;
		}
		self.location='select.html';
	});

	// 随访身高体重验证
	// $('#height .next').click(function(){
	// 	var tall = $('#height .tall').val();
	// 	var fat = $('#height .fat').val();
	// 	if(tall==''||fat==''){
	// 		$('.please').fadeIn().delay(2000).fadeOut();
	// 		return false;
	// 	}
	// });

	//二选一
	$('.enter .bad input').click(function(){
		$('.enter .must').css('display','block');
		$('.enter .yea').css('display','block');
		$('.enter .ye').css('display','none');
	});
	
	$('.enter .good input').click(function(){
		$('.enter .must').css('display','none');
		$('.enter .yea').css('display','none');
		$('.enter .ye').css('display','block');
	});

	// 开关
	$('.mess li .ok').css({'color':'#FFF','backgroundColor':'#FF679A'});
	$('.mess li .ok').click(function(){
		$(this).css({'color':'#FFF','backgroundColor':'#FF679A'}).siblings().css({'color':'#333','backgroundColor':'#E6E6E6'});
	});
	$('.mess li .no').click(function(){
		$(this).css({'color':'#FFF','backgroundColor':'#FF679A'}).siblings().css({'color':'#333','backgroundColor':'#E6E6E6'});
	});


	//回答选项
	var t=0;
	var sel = $('.paginations .select').length; 
	function check(){
		$('.paginations .select').eq(t).show();
		$('.paginations .select').eq(t).siblings().hide();
	}
	$('.paginations .pre').click(function(){
		t--;
		check();
		if(t<=0){
			$('.paginations .pre').attr('disabled',true);
			$('.paginations .pre').css('backgroundColor','#ccc');
			$('.paginations .nex').attr('disabled',false);	
			$('.paginations .nex').css('backgroundColor','#F64CA2');
			$('.paginations .done').css('display','none');
		}else{
			$('.paginations .nex').attr('disabled',false);	
			$('.paginations .nex').css('backgroundColor','#F64CA2');
			$('.paginations .done').css('display','none');
		}
	});

	$('.paginations .nex').click(function(){
		t++;
		check();
		if(t>=sel-1){
			$('.paginations .nex').attr('disabled',true);
			$('.paginations .nex').css('backgroundColor','#ccc');
			$('.paginations .done').css('display','block');
			$('.paginations .pre').attr('disabled',false);	
			$('.paginations .pre').css('backgroundColor','#F64CA2');
		}else{
			$('.paginations .pre').attr('disabled',false);	
			$('.paginations .pre').css('backgroundColor','#F64CA2');
			$('.paginations .done').css('display','none');
		}
	});

	//完成跳转下一步
	$('.tep').eq(0).click(function(){
		$('.change .find').css('display','block').siblings().css('display','none');
		$('.progress .num .same').eq(1).css('color','#FF329A').siblings().css('color','#333');
		$('.progress .text .same').eq(1).css('color','#FF329A').siblings().css('color','#333');
	});
	$('.tep').eq(1).click(function(){
		$('.change .enter').css('display','block').siblings().css('display','none');
		$('.progress .num .same').eq(2).css('color','#FF329A').siblings().css('color','#333');
		$('.progress .text .same').eq(2).css('color','#FF329A').siblings().css('color','#333');
	});

})
