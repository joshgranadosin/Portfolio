$('a.hamburger-trigger').click(function(){
	console.log("button");
	$('div.hamburger').toggleClass('hidden');
});

$('section').click(function(){
	console.log("not button");
	$('div.hamburger').addClass('hidden');
});