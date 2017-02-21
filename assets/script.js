function createUser() {
	localStorage.setItem('User', $('form').find('input[name="pseudo"]').val());
}

function userExist() {
	if (localStorage.getItem('User')) {
		return true;
	}
	return false;
}

function isConnected() {
	if (userExist()) {
		$('form').hide();
		$('#page-profil').show();
		$('#user-profil').append('<a href="#">' + localStorage.getItem('User') + '</a>');
	} else {
		$('form').show();
		$('#page-profil').hide();
	}
}

$(function() {
	isConnected();
	$('form').submit(function() {
		createUser();
		isConnected();
		loadHome();
		return false;
	});
});