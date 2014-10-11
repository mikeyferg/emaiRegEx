$(document).ready(function() {

	$('form').on('blur', 'input.email', function() {
		var userInput = $(this).val();
			console.log("User Input is " + userInput);
		var userInputCheck =/\b[\w_]+@[\w_]+\.[A-Za-z_-]{2,}\b/;

		//var isMatch1 = userInput.match(userInputCheck);
		//console.log("User Input.match is " + isMatch1)

		var matchTest = userInputCheck.test(userInput);
			console.log("Do we have a match " + matchTest);
				if(matchTest) {
				alert("Email properly submitted!")
			}
			else {
				alert("Please enter proper email.")
			}

	})



});


