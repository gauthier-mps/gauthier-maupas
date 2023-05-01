function toggleSidebar(){
	document.getElementById("nav-tel").classList.toggle('active');
}

$(document).ready(function(){
	$('.btn-sidebar').click(function(){
		$('.btn-sidebar').toggleClass('active');
	})
})

function closeSidebar(){
  document.getElementById("nav-tel").classList.toggle('active');
  $('.btn-sidebar').toggleClass('active');
}