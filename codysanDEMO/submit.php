<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email address here
	$youremail = 'edgarsanp@hotmail.com';

	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = "This is the form that was just submitted:
	Name:  $_POST[name]
	E-Mail: $_POST[email]
	Message: $_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	// finally, send the message
	mail($youremail, 'Contact Form', $body, $headers );

}

// otherwise, let the spammer think that they got their message through

?>
<!DOCTYPE HTML>
<html>
<head>

<title>Thanks!</title>

</head>
<body>

			<div class="row">
				<div class="jumbotron jumbotron-fluid jbtron" style="background-image: url(img/headerContact.jpg)">
					<h1 class="display-3">Contact us</h1>
					<p class="lead text-justify">
					Feel free to shout us by filling the contact form.
					</p>
				</div>
			</div>		
			<div class="row justify-content-sm-center">
				<div class="col-sm-1"></div>
				<div class="col-sm-10">
					<p>Please, fill in the required information:</p>
				</div>
				<div class="col-sm-1"></div>
			</div>
			
			</br>

</body>
</html>