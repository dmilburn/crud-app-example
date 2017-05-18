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
			$('#clothing-item-list').append(response)
		})

	})

	$('#clothing-item-list').on("click", ".clothing-item-link", function(event){
		event.preventDefault();
		var $clothingLink = $(this); 
		var url = $(this).attr("href");
		$.ajax({
			method: "get",
			url: url,
		}).done(function(response){
			console.log("hello")
			$(".clothing-item-img").remove();
			$clothingLink.parent().append(response);
		})
		console.log("goodbye")
	})
});
