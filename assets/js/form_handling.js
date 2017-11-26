$( document ).ready(function() {

	var form = document.getElementById('needs-validation');

	$( "#needs-validation").submit(function( event ) {
		// alert( "Handler for .submit() called." );
		event.preventDefault();
		event.stopPropagation();
		if (form.checkValidity() === false) {
			form.classList.add('was-validated');
		}
		else {
			var userName = $("#inputName").val();
			var formElement = $("#needs-validation");
			var formParent = formElement.parent();
			formElement.hide();
			formParent.append(
				"<div id='form-response'><p>Thank you for attempting to submit a message.</p>" +
				"<p>Unfortunately, the form currently does not submit the data anywhere.</p>" +
				"<p>Sorry :(</p>" +
				"<button id='backToFormButton' class='btn btn-primary'>Go Back To Form</button>" +
				"</div>"
			);
			$("#backToFormButton").click(function() {
				$("#form-response").remove();
				formElement.show();
			});
			// console.log("no error: " + userName);
		}
	});


}, false);
