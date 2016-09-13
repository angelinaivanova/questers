$(document).ready(function(){
	$('.first-button').click(function(){
		$('#first').addClass('active');
		$('.first-button').addClass('active-first');
		$('.second-button').removeClass('active-second');
		$('.third-button').removeClass('active-third');
		$('#second').removeClass('active');
		$('#third').removeClass('active');
	});
	
	$('.second-button').click(function(){
		$('#second').addClass('active');
		$('.second-button').addClass('active-second');
		$('.first-button').removeClass('active-first');
		$('.third-button').removeClass('active-third');
		$('#first').removeClass('active');
		$('#third').removeClass('active');
	});
	
	$('.third-button').click(function(){
		$('#third').addClass('active');
		$('.third-button').addClass('active-third');
		$('.first-button').removeClass('active-first');
		$('.second-button').removeClass('active-second');
		$('#first').removeClass('active');
		$('#second').removeClass('active');
	});

	$('.menu-trigger').click(function(){
		$('.menu-holder').toggleClass('open');
	});
});
