	//if lang == "en"{
		//English
	$("#navbar").on('click', '#gb', function(){
			sessionStorage.setItem("userLang","en");
			//alert('English button clicked');
			reload_page(sessionStorage.getItem("userLang"));
		//});
	//}
	
	//if lang == "es"{
		//Spanish  
		$("#navbar").on('click', '#sp', function(){
			sessionStorage.setItem("userLang","es");
			//alert('Spanish button clicked');
			reload_page(sessionStorage.getItem("userLang"));
		});
	//}
	//if lang == "ca"{
		//Catalan 
		$("#navbar").on('click', '#cat', function(){
			sessionStorage.setItem("userLang","ca");
			//alert('Catalan button clicked');
			reload_page(sessionStorage.getItem("userLang"));
		});
	//}

