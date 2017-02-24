// Main function
$(function() {
	isUserConnected();
	isUserCreatedAccount();
});

// Check if user is connected
function isUserConnected() {
	if (userExist()) {
		showContent();
		loadPage();
		redirectLogOff();
	} else {
		hideContent();
	}
}

// Check if user exist in local Storage
function userExist() {
	if (localStorage.getItem('User')) {
		return true;
	}
	return false;
}

// Show or Hide content depending of user's session
function showContent() {
	$('#log-in').hide();
	$('#page-profil').show();
	$('#user-profil').text(localStorage.getItem('User'));
}

function hideContent() {
	$('#log-in').show();
	$('#page-profil').hide();
}

// Load all the pages without refreshing index url
function loadPage() {
	$('a').on('click', function(e){  
   		e.preventDefault();
   		var pageRef = $(this).attr('href');
   		displayContentPage(pageRef);
	});
}

function displayContentPage(pageRefInput) {
	$.ajax({
		url: pageRefInput,
		type: "GET",
		dataType: "text",
		success: function(response) {
			$('.content-page').html(response);
		},
		error: function(error) {
  			console.log('The page was not loaded', error);
		}
	});
}

// If user log off, back to log in
function redirectLogOff() {
	$('#log-off').click(function() {
		localStorage.clear();
		isUserConnected();
	});
}

// Form which create the user's account
function isUserCreatedAccount() {
	$('#sign-in').submit(function(){
		createUser();
		isUserConnected();
		return false;
	});
}

// Create user in local Storage
function createUser() {
	localStorage.setItem('User', $('#sign-in').find('input[name="pseudo"]').val());
}






