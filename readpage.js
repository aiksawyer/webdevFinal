$.get('Assets/book1.htm', function(data){
	//console.log(data);
	//var html = $(data);
	
	$('#content').html(data);
	console.log("got data");

	var bookTitle = $('#content').find('h1');
	var chapters = $('#content').find('h3');
	//console.log(html);

	console.log(bookTitle.text())
	chapters.each(function(i, chapterName){
		console.log($(chapterName).text())

	});

	$('#content pre, #content style').remove();
	$('#content table, #content style').remove(); 
	$('#content br, #content style').remove();
	$('#content h2, #content style').remove();

});