;(function($){
	$.fn.verify = function(option){
		var tam = option.text.length;
		var letter = false;
		var number = false;
		var special = false;
		for(var i=0;i<tam-1;i++){
			var char = option.text[i];
			if(isLetter(char)==true){
				letter = true;
			}
			if(isNumber(char)==true){
				number = true;
			}
			if(isEspecial(char)==true){
				special = true;
			}
		}	
		 function qtde_tipos (letter,number,special){
		 	var qtde_tipos;
		 	if(letter == true && number == false && special == false|| number == true && letter == false && 
		 		special == false || special == true && letter == true && number == false){
		 		qtde_tipos = 1;
		 	}
		 	if(letter == true && number == true && special == false|| number == true && letter == false && 
		 		special == true || special == true && letter == true && number == false){
		 		qtde_tipos = 2;
		 	}
		 	if(letter == true && number == true && special == true){
		 		qtde_tipos = 3;
		 	}
		 	return qtde_tipos;
		 }
		 var qtde = qtde_tipos(letter,number,special);

		if(tam<8 && qtde ==1){
			$(".senhaMsg").text("Muito fraca");
		}
		if(tam<8 && qtde==2){
			$(".senhaMsg").text("Fraca");
		}
		if(tam>=8 && qtde==2){
			$(".senhaMsg").text("Moderada");
		}
		if(tam>=8 && qtde==3){
			$(".senhaMsg").text("Forte");
		}
		
		
	}
	function isLetter(digito){
		if(digito.charCodeAt(0)>=65 && digito.charCodeAt(0)<=90 || digito.charCodeAt(0)>=97 && digito.charCodeAt(0)<=122){
			return true;
			
		}
		return false;
	}
	function isNumber(digito){
		if(digito.charCodeAt(0)>=48 && digito.charCodeAt(0)<=57){
			return true;
			
		}
		return false;
	}
	function isEspecial(digito){
		if(digito.charCodeAt(0)>=33 && digito.charCodeAt(0)<=47 || digito.charCodeAt(0)>=58 && digito.charCodeAt(0)<=64 ){
			return true;
			
		}
		return false;
	}
})(jQuery);