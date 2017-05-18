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
			$('#closet-container').append(response)
		})

	})
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
