const btn = document.querySelector('.btn-back');

btn.addEventListener('click', () => {

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	})

})


$(window).scroll(function(){
	posScroll = $(document).scrollTop();
	if(posScroll >=200) 
		$('.btn-back').fadeIn(600);
	else
		$('.btn-back').fadeOut(600);
});