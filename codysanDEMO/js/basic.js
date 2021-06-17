function getBrowserLanguage(){
	// First, check the session storage to see if we have the language defined.
	if (sessionStorage['userLang']) {
		alert("There is 'userLang' in session storage. It's set to " + sessionStorage.getItem("userLang"))
		var userLang = sessionStorage.getItem("userLang");
	} else {
		// Language detection
		var userLang = navigator.language || navigator.userLanguage; 
		//localStorage.setItem("userLang", userLang);
		alert("The language is set to: " + userLang);
	}
	// HTML5 session Storage
	sessionStorage.setItem("userLang",userLang);
};

function checkLanguageChange(){
	//English
	$("#navbar").on('click', '#gb', function(){
		sessionStorage.setItem("userLang","en");
		//alert('English button clicked');
		reload_page(sessionStorage.getItem("userLang"));
	});

	//Spanish  
	$("#navbar").on('click', '#sp', function(){
		sessionStorage.setItem("userLang","es");
		//alert('Spanish button clicked');
		reload_page(sessionStorage.getItem("userLang"));
	});
	//Catalan 
	$("#navbar").on('click', '#cat', function(){
		sessionStorage.setItem("userLang","ca");
		//alert('Catalan button clicked');
		reload_page(sessionStorage.getItem("userLang"));
	});
};