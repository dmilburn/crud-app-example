$(document).ready(function() {

	$('#new-clothing-item-form').on('submit', function(event){
		event.preventDefault();
		var url = $(this).attr('action');
		var method = $(this).attr('method');
		var data = $(this).serialize();
		$.ajax({
			url:url,
			method: method,
			data:data
		}).done(function(response){
			debugger
			$('#clothing-item-list').append(response)
		})

	})
});
