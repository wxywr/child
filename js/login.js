function weblogin() {
	var phone = jQuery("#account").val();
	var passwd = jQuery("#password").val();
	mui.ajax("http://192.168.2.114:8082/wjcloud/cloudroute/login.json", {
		data: {
			'phone': phone,
			'password': passwd
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': "*"
		},
		success: function(data) {
			//服务器返回响应，根据响应结果，分析是否登录成功；
			alert(data);
		},
		error: function(data, status, errorThrown) {
			alert(data);
			alert(status);
			alert(errorThrown);
		}
	})
}

var url = 'http://192.168.2.114:8082/wjcloud/cloudroute/login.json';
var data;
var xhr = null;

function applogin() {
	if(xhr) {
		return;
	}
	var postData = {
		"phone": jQuery("#account").val(),
		"password": jQuery("#password").val()
	};
	console.log(url);
	postData = (function(obj) { // 转成post需要的字符串.
		var str = "";
		for(var prop in obj) {
			str += prop + "=" + obj[prop] + "&"
		}
		return str;
	})(postData);
	xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = xhrStatechange;
	xhr.open("POST", url);
	xhr.send(postData);
}

function xhrStatechange() {
	if(xhr.readyState == 4 && xhr.status == 200) {
		data = JSON.parse(xhr.responseText);
		//alert(data.a1)   
		for(i in data) {
			console.log(data[i]);
		}

	}
}