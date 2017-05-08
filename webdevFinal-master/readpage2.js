

$.get('Assets/book2.htm', function(data){
	//console.log(data);
	//var html = $(data);
	
	$('#content').html(data);
	console.log("got data");

	var bookTitle = $('#content').find('h1');
	var chapters = $('#content').find('h2');
	//console.log(html);


	$('#content big, #content style').remove();
	
	console.log(bookTitle.text());
	chapters.each(function(i, chapterName){
	///console.log($(chapterName).text());

	});


	$('#content pre, #content style').remove();
	$('#content hr, #content style').remove();
	$('#content blockquote, #content style').remove();
	$('#content br, #content style').remove();


	var toc = $('#content').find('p.toc');


	$("ul").append(toc);

	console.log("git here")


});






