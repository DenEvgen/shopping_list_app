$("ul").on('click', 'li' , function() {
	$(this).toggleClass('done');
})

$("ul").on('click', 'span', function(event) {
	event.stopPropagation()
	$(this).parent().fadeOut(function() {
		$(this).remove()
	});
})

$("input").keypress(function(event) {
	if(event.which === 13) {
		var itemText = $(this).val()
		$(this).val('')
		$("ul").append('<li>'+itemText+' <span><i class="far fa-trash-alt"></i></span></li>')
	}
})

$('h2 span').click(function() {
	$('input').fadeToggle()
})







//если делать не через класс в css
// 	if($(this).css('color') === '(255, 0, 0)') {
// 		$(this).css({
// 		color: 'rgb(0, 0, 0)',
// 		textDecoration: 'none'
// 	});
// 	} else {
// 		$(this).css({
// 		color: 'rgb(255, 0, 0)',
// 		textDecoration: 'line-through'
// 	})
// 	}
// })