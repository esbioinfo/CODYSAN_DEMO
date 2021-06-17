window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
	"popup": {
	  "background": "#237afc"
	},
	"button": {
	  "background": "#fff",
	  "text": "#237afc"
	}
  },
  "theme": "classic",
  "position": "bottom-left",
  "content": {
	"href": "privacy.html"
  }
})});

function getBrowserLanguage(){
	// First, check the session storage to see if we have the language defined.
	if (sessionStorage['userLang']) {
		alert("There is 'userLang' in session storage. It's set to " + sessionStorage.getItem("userLang"))
		var userLang = sessionStorage.getItem("userLang");
	} else {
		// Language detection
		var userLang = navigator.language || navigator.userLanguage; 
		if (userLang == "ca") {
			userLang = "ca";
		} else if (userLang == "es") {
			userLang = "es";
		} else {
			userLang = "en";
		}
		//localStorage.setItem("userLang", userLang);
		alert("The language is set to: " + userLang);
	}
	// HTML5 session Storage
	sessionStorage.setItem("userLang",userLang);
};



