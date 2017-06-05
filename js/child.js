$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.2+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.2+"px"});
	$('#form .name').focus(function(){
		$(this).attr('placeholder','');
	})
	$('#form .name').blur(function(){
		$(this).attr('placeholder','请输入姓名');
	})
	$('#height .tall').focus(function(){
		$(this).attr('placeholder','');
	})
	$('#height .tall').blur(function(){
		$(this).attr('placeholder','请输入数字');
	})
	$('#height .fat').focus(function(){
		$(this).attr('placeholder','');
	})
	$('#height .fat').blur(function(){
		$(this).attr('placeholder','请输入数字');
	})

	//时间线，tab切换
	var n = 0;
	$('.progress .num div').click(function(){
		var index = $(this).index();
		n=index;
		change();
	})
	$('.progress .text div').click(function(){
		var index = $(this).index();
		n=index;
		change();
	})
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
	})

	$('.yao .tit').click(function(){
		$('.yao .add').css('backgroundColor','#E557D1');
		$('.yao add').text('保 存');
		$('.yao .infos').css('display','block');
	})

	$('.lu p').click(function(){
		$('.lu .add').css('backgroundColor','#E557D1');
		$('.lu .add').text('保 存');
		$('.lu .info').css('display','block');
		$('.lu .want').text('添加过敏源');
	})

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
	})

	//过敏空白
	$('.add-min p').click(function(){
		$('.add-min .add').text('保存');
		$('.bj').css('display','none');
		$('.add-min .info').css('display','block');
	})

	//病历空白
	$('.me p').click(function(){
		$('.me .new').text('保存');
		$('.here').css('display','none');
		$('.me .info').css('display','block');
	})

	//首页表单提交验证
	$('.care').click(function(){
		var _name = $('#form .name').val();
		var _year = $('#form .year').val();
		var _month = $('#form .month').val();
		var _day = $('#form .day').val();
		if(_name==''||_year==''||_month==''||_day==''){
			$('.remind').fadeIn().delay(2000).fadeOut();
			return false;
		}
	})

})
