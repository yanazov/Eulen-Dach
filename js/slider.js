var group_position = 0;
var group_position_tmp = 0;
var foto_position = 0;
var foto_position_tmp = 0;
var first_click = 1;
var close_menu_timer =0

/*    0   254   508  */
function js_group_left(){
	var x = document.getElementsByClassName("group_ul")[0].getElementsByClassName("group_li1").length-1;
	var i = 0;
	if(group_position < -254*x+1){
		group_position += 254*(x+1);
	
	}
	if(first_click == 1){
		group_position_tmp = group_position+254;
		first_click = 0;
	}
	
	group_position += 10;
	if(group_position > group_position_tmp){
		group_position = group_position_tmp;
		
		for(i = 0; i < x+1; i++){
		if(group_position < x*254){
			document.getElementsByClassName("group_li1")[i].style.display = 'block';
			document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("group_li1")[i].style.left = (i)*254+group_position+'px';
			document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
		}
		if(group_position > 0  &&  (i+2)*254 > 254*3){
			document.getElementsByClassName("group_li1")[i].style.display = 'block';
			document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("group_li1")[i].style.left = -254*(x+1)+i*254+group_position+'px';
			document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
		}		
	}
		clearInterval(slider_left_timet);
		if(group_position > 254)
			group_position = -(x-1)*254;
		first_click = 1;
		return 0;
	}	
	for(i = 0; i < x+1; i++){
		if(group_position < (x)*254){
			document.getElementsByClassName("group_li1")[i].style.display = 'block';
			document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
			if(i == 0 && group_position < -500)
				document.getElementsByClassName("group_li1")[i].style.left = (x+1)*254+group_position+'px';
			else	
				document.getElementsByClassName("group_li1")[i].style.left = (i)*254+group_position+'px';
			document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
		}
		if(group_position > 0  &&  (i+1)*254 > 254*3){
			document.getElementsByClassName("group_li1")[i].style.display = 'block';
			document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("group_li1")[i].style.left = -254*(x+1)+i*254+group_position+'px';
			document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
		}		
	}
	slider_left_timet=setTimeout(function() {js_group_left()}, 5);
	
}


function js_group_right(){
	var x = document.getElementsByClassName("group_ul")[0].getElementsByClassName("group_li1").length-1;
	var i = 0;
	if(first_click == 1){
		group_position_tmp = group_position-254;
		first_click = 0;
	}
	group_position -= 10;
	if(group_position < group_position_tmp){
		group_position = group_position_tmp;
		for(i = 0; i < x+1; i++){
			if(group_position > -(i+1)*254){
				document.getElementsByClassName("group_li1")[i].style.display = 'block';
				document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
				document.getElementsByClassName("group_li1")[i].style.left = i*254+group_position+'px';
				document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
			}
			if(group_position < -(i+1)*254){
				document.getElementsByClassName("group_li1")[i].style.display = 'block';
				document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
				document.getElementsByClassName("group_li1")[i].style.left = 254*(x+1)+i*254+group_position+'px';
				document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
			}
			
		}
		clearInterval(slider_right_timet);
		if(group_position < -x*254)
			group_position = 0;
		first_click = 1;
		return 0;
	}	
	for(i = 0; i < x+1; i++){
		if(group_position > -(i+1)*254){
			document.getElementsByClassName("group_li1")[i].style.display = 'block';
			document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("group_li1")[i].style.left = i*254+group_position+'px';
			document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
		}
		if(group_position < -(i+1)*254){
			document.getElementsByClassName("group_li1")[i].style.display = 'block';
			document.getElementsByClassName("group_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("group_li1")[i].style.left = 254*(x+1)+i*254+group_position+'px';
			document.getElementsByClassName("group_li1")[i].style.top = 0+'px';
		}
		
	}
	slider_right_timet=setTimeout(function() {js_group_right()}, 5);	
}


function js_overMenu(elem){
	if(close_menu_timer > 0){
		clearInterval(close_menu_timer);
		close_menu_timer = 0;
	}
	document.getElementsByClassName(elem)[0].style.display = 'block';

}

function js_outMenut(elem){
	close_menu_timer=setTimeout(function() {js_close_menu(elem)}, 200);

}

function js_close_menu(elem){
	clearInterval(close_menu_timer);
	close_menu_timer = 0;
	document.getElementsByClassName(elem)[0].style.display = 'none';
}

function js_foto_left(){
	var x = document.getElementsByClassName("foto_ul")[0].getElementsByClassName("foto_li1").length-1;
	var i = 0;
	if(foto_position < -252*x+1){
		foto_position += 252*(x+1);
	
	}
	if(first_click == 1){
		foto_position_tmp = foto_position+252;
		first_click = 0;
	}
	
	foto_position += 10;
	if(foto_position > foto_position_tmp){
		foto_position = foto_position_tmp;
		
		for(i = 0; i < x+1; i++){
		if(foto_position < x*252){
			document.getElementsByClassName("foto_li1")[i].style.display = 'block';
			document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("foto_li1")[i].style.left = (i)*252+foto_position+'px';
			document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
		}
		if(foto_position > 0  &&  (i+2)*252 > 252*3){
			document.getElementsByClassName("foto_li1")[i].style.display = 'block';
			document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("foto_li1")[i].style.left = -252*(x+1)+i*252+foto_position+'px';
			document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
		}		
	}
		clearInterval(slider_left_timet);
		if(foto_position > 252)
			foto_position = -(x-1)*252;
		first_click = 1;
		return 0;
	}	
	for(i = 0; i < x+1; i++){
		if(foto_position < (x)*252){
			document.getElementsByClassName("foto_li1")[i].style.display = 'block';
			document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
			if(i == 0 && foto_position < -500)
				document.getElementsByClassName("foto_li1")[i].style.left = (x+1)*252+foto_position+'px';
			else	
				document.getElementsByClassName("foto_li1")[i].style.left = (i)*252+foto_position+'px';
			document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
		}
		if(foto_position > 0  &&  (i+1)*252 > 252*3){
			document.getElementsByClassName("foto_li1")[i].style.display = 'block';
			document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("foto_li1")[i].style.left = -252*(x+1)+i*252+foto_position+'px';
			document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
		}		
	}
	slider_left_timet=setTimeout(function() {js_foto_left()}, 5);
	
}


function js_foto_right(){
	var x = document.getElementsByClassName("foto_ul")[0].getElementsByClassName("foto_li1").length-1;
	var i = 0;
	if(first_click == 1){
		foto_position_tmp = foto_position-252;
		first_click = 0;
	}
	foto_position -= 10;
	if(foto_position < foto_position_tmp){
		foto_position = foto_position_tmp;
		for(i = 0; i < x+1; i++){
			if(foto_position > -(i+1)*252){
				document.getElementsByClassName("foto_li1")[i].style.display = 'block';
				document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
				document.getElementsByClassName("foto_li1")[i].style.left = i*252+foto_position+'px';
				document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
			}
			if(foto_position < -(i+1)*252){
				document.getElementsByClassName("foto_li1")[i].style.display = 'block';
				document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
				document.getElementsByClassName("foto_li1")[i].style.left = 252*(x+1)+i*252+foto_position+'px';
				document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
			}
			
		}
		clearInterval(slider_right_timet);
		if(foto_position < -x*252)
			foto_position = 0;
		first_click = 1;
		return 0;
	}	
	for(i = 0; i < x+1; i++){
		if(foto_position > -(i+1)*252){
			document.getElementsByClassName("foto_li1")[i].style.display = 'block';
			document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("foto_li1")[i].style.left = i*252+foto_position+'px';
			document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
		}
		if(foto_position < -(i+1)*252){
			document.getElementsByClassName("foto_li1")[i].style.display = 'block';
			document.getElementsByClassName("foto_li1")[i].style.position = 'absolute';
			document.getElementsByClassName("foto_li1")[i].style.left = 252*(x+1)+i*252+foto_position+'px';
			document.getElementsByClassName("foto_li1")[i].style.top = 0+'px';
		}
		
	}
	slider_right_timet=setTimeout(function() {js_foto_right()}, 5);	
}