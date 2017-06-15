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
		var _year = $('#form .year').val();
		var _month = $('#form .month').val();
		var _day = $('#form .day').val();
		if(_name==''||_year==''||_month==''||_day==''){
			$('.remind').fadeIn().delay(2000).fadeOut();
			return false;
		}
	});

	//随访身高体重验证
	$('#height .next').click(function(){
		var tall = $('#height .tall').val();
		var fat = $('#height .fat').val();
		if(tall==''||fat==''){
			$('.please').fadeIn().delay(2000).fadeOut();
			return false;
		}
	});

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
	$('.find .select .next-a').click(function(){
		$('.find .lun .ti-b').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-c').click(function(){
		$('.find .lun .ti-c').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-b').click(function(){
		$('.find .lun .ti-a').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-e').click(function(){
		$('.find .lun .ti-d').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-d').click(function(){
		$('.find .lun .ti-b').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-g').click(function(){
		$('.find .lun .ti-e').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-f').click(function(){
		$('.find .lun .ti-c').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-i').click(function(){
		$('.find .lun .ti-f').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-h').click(function(){
		$('.find .lun .ti-d').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-k').click(function(){
		$('.find .lun .ti-g').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-j').click(function(){
		$('.find .lun .ti-e').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-m').click(function(){
		$('.find .lun .ti-h').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-l').click(function(){
		$('.find .lun .ti-f').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-o').click(function(){
		$('.find .lun .ti-i').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-n').click(function(){
		$('.find .lun .ti-g').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-q').click(function(){
		$('.find .lun .ti-j').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-p').click(function(){
		$('.find .lun .ti-h').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-s').click(function(){
		$('.find .lun .ti-k').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-r').click(function(){
		$('.find .lun .ti-i').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-u').click(function(){
		$('.find .lun .ti-l').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-t').click(function(){
		$('.find .lun .ti-j').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-w').click(function(){
		$('.find .lun .ti-m').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-v').click(function(){
		$('.find .lun .ti-k').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-y').click(function(){
		$('.find .lun .ti-n').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-x').click(function(){
		$('.find .lun .ti-l').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-zz').click(function(){
		$('.find .lun .ti-o').css('display','block').siblings().css('display','none');
	});
	$('.find .select .next-z').click(function(){
		$('.find .lun .ti-m').css('display','block').siblings().css('display','none');
	});

	$('.find .select .next-end').click(function(){
		$('.find .lun .ti-n').css('display','block').siblings().css('display','none');
	});

	//解析
	$('.find .ti-a .what img').click(function(){
		$('.find .ti-a .what').css('display','none');
		$('.find .ti-a .ins').css('display','block');
	});
	$('.find .ti-a .ins img').click(function(){
		$('.find .ti-a .what').css('display','block');
		$('.find .ti-a .ins').css('display','none');
	});
	$('.find .ti-b .what img').click(function(){
		$('.find .ti-b .what').css('display','none');
		$('.find .ti-b .ins').css('display','block');
	});
	$('.find .ti-b .ins img').click(function(){
		$('.find .ti-b .what').css('display','block');
		$('.find .ti-b .ins').css('display','none');
	});
	$('.find .ti-c .what img').click(function(){
		$('.find .ti-c .what').css('display','none');
		$('.find .ti-c .ins').css('display','block');
	});
	$('.find .ti-c .ins img').click(function(){
		$('.find .ti-c .what').css('display','block');
		$('.find .ti-c .ins').css('display','none');
	});
	$('.find .ti-d .what img').click(function(){
		$('.find .ti-d .what').css('display','none');
		$('.find .ti-d .ins').css('display','block');
	});
	$('.find .ti-d .ins img').click(function(){
		$('.find .ti-d .what').css('display','block');
		$('.find .ti-d .ins').css('display','none');
	});
	$('.find .ti-e .what img').click(function(){
		$('.find .ti-e .what').css('display','none');
		$('.find .ti-e .ins').css('display','block');
	});
	$('.find .ti-e .ins img').click(function(){
		$('.find .ti-e .what').css('display','block');
		$('.find .ti-e .ins').css('display','none');
	});
	$('.find .ti-f .what img').click(function(){
		$('.find .ti-f .what').css('display','none');
		$('.find .ti-f .ins').css('display','block');
	});
	$('.find .ti-f .ins img').click(function(){
		$('.find .ti-f .what').css('display','block');
		$('.find .ti-f .ins').css('display','none');
	});
	$('.find .ti-g .what img').click(function(){
		$('.find .ti-g .what').css('display','none');
		$('.find .ti-g .ins').css('display','block');
	});
	$('.find .ti-g .ins img').click(function(){
		$('.find .ti-g .what').css('display','block');
		$('.find .ti-g .ins').css('display','none');
	});
	$('.find .ti-h .what img').click(function(){
		$('.find .ti-h .what').css('display','none');
		$('.find .ti-h .ins').css('display','block');
	});
	$('.find .ti-h .ins img').click(function(){
		$('.find .ti-h .what').css('display','block');
		$('.find .ti-h .ins').css('display','none');
	});
	$('.find .ti-i .what img').click(function(){
		$('.find .ti-i .what').css('display','none');
		$('.find .ti-i .ins').css('display','block');
	});
	$('.find .ti-i .ins img').click(function(){
		$('.find .ti-i .what').css('display','block');
		$('.find .ti-i .ins').css('display','none');
	});
	$('.find .ti-j .what img').click(function(){
		$('.find .ti-j .what').css('display','none');
		$('.find .ti-j .ins').css('display','block');
	});
	$('.find .ti-j .ins img').click(function(){
		$('.find .ti-j .what').css('display','block');
		$('.find .ti-j .ins').css('display','none');
	});
	$('.find .ti-k .what img').click(function(){
		$('.find .ti-k .what').css('display','none');
		$('.find .ti-k .ins').css('display','block');
	});
	$('.find .ti-k .ins img').click(function(){
		$('.find .ti-k .what').css('display','block');
		$('.find .ti-k .ins').css('display','none');
	});
	$('.find .ti-l .what img').click(function(){
		$('.find .ti-l .what').css('display','none');
		$('.find .ti-l .ins').css('display','block');
	});
	$('.find .ti-l .ins img').click(function(){
		$('.find .ti-l .what').css('display','block');
		$('.find .ti-l .ins').css('display','none');
	});
	$('.find .ti-m .what img').click(function(){
		$('.find .ti-m .what').css('display','none');
		$('.find .ti-m .ins').css('display','block');
	});
	$('.find .ti-m .ins img').click(function(){
		$('.find .ti-m .what').css('display','block');
		$('.find .ti-m .ins').css('display','none');
	});
	$('.find .ti-n .what img').click(function(){
		$('.find .ti-n .what').css('display','none');
		$('.find .ti-n .ins').css('display','block');
	});
	$('.find .ti-n .ins img').click(function(){
		$('.find .ti-n .what').css('display','block');
		$('.find .ti-n .ins').css('display','none');
	});
	$('.find .ti-o .what img').click(function(){
		$('.find .ti-o .what').css('display','none');
		$('.find .ti-o .ins').css('display','block');
	});
	$('.find .ti-o .ins img').click(function(){
		$('.find .ti-o .what').css('display','block');
		$('.find .ti-o .ins').css('display','none');
	});

})


