$(function(){
	$('header .navbar .navbar-toggle').click(function () {		
		$('header .navbar .dropdown > a').removeAttr('data-toggle');			
		$('header .navbar .dropdown').addClass('open');		
	});
	$( window ).resize(function() {
		if ($(window).width() <= 767){
			$('header .navbar .dropdown > a').removeAttr('data-toggle');			
			$('header .navbar .dropdown').addClass('open');		
		}				
		else if ($(window).width() > 767){
			$('header .navbar .dropdown > a').attr('data-toggle','dropdown');			
			$('header .navbar .dropdown').removeClass('open');		
		};
	});	
	$('header .navbar li').not('.dropdown').find('a').click(function () {	
		if ($(window).width() <= 767){	
			$('header .navbar button').click();
		}
	});
	$('.navbar-brand').click(function () {	
		$('header .navbar-nav a[href="#jrHome"]').tab('show');
		$('.navbar-brand').blur();
	});		
	
	$('.showMemoryGame').click(function () {	
		$('header .navbar-nav a[href="#jrMemoryGame"]').tab('show');
	});	
	$('.showMadLibs').click(function () {	
		$('header .navbar-nav a[href="#jrMadLibs"]').tab('show');
	});		
	$('.showTicTacToe').click(function () {	
		$('header .navbar-nav a[href="#jrTicTacToe"]').tab('show');
	});	
});