$(function(){
	$('header .navbar li a').click(function () {	
		if ($(window).width() <= 767){	
			$('header .navbar button').click();
		}
	});
	$('#showMemoryGame').click(function () {	
		$('header .navbar-nav a[href="#jrMemoryGame"]').tab('show');
	});	
	$('#showMadLibs').click(function () {	
		$('header .navbar-nav a[href="#jrMadLibs"]').tab('show');
	});		
	
});