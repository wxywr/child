//检查资料
function picture() {
		var r= new FileReader();
		f=document.getElementById('file').files[0];
		r.readAsDataURL(f);
		r.onload=function  (e) {
			document.getElementById('show').src=this.result;
		};
	};

function big(){
	var a = document.getElementById('show');
	if(a.style.width=='50%'){
		a.style.width='100%';
	}else{
		a.style.width='50%';
	}
}

//诊断资料
function pictures() {
		var r= new FileReader();
		f=document.getElementById('files').files[0];
		r.readAsDataURL(f);
		r.onload=function  (e) {
			document.getElementById('shows').src=this.result;
		};
	};

function bigs(){
	var b = document.getElementById('shows');
	if(b.style.width=='50%'){
		b.style.width='100%';
	}else{
		b.style.width='50%';
	}
}

//治疗资料
function picturess() {
		var r= new FileReader();
		f=document.getElementById('filess').files[0];
		r.readAsDataURL(f);
		r.onload=function  (e) {
			document.getElementById('showss').src=this.result;
		};
	};

function bigss(){
	var c = document.getElementById('showss');
	if(c.style.width=='50%'){
		c.style.width='100%';
	}else{
		c.style.width='50%';
	}
}
