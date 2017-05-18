$(document).ready(function() {

	$('#new-clothing-item-form').on('click', function(event){
		var url = $(this).attr('method');
		var method = $(this).attr('action');
		var data = $(this).serialize();
		$.ajax({
			url:url,
			method: method,
			data:data
		}).done(function(response){
			$('closet-container').append(repsonse)
		})

	})
});
