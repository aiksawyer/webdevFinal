


$.get('Assets/book3.htm', function(data){
	//console.log(data);
	//var html = $(data);
	
	$('#content').html(data);
	console.log("got data");

	var bookTitle = $('#content').find('h1');
	var chapters = $('#content').find('h3');
	//console.log(html);


	console.log(bookTitle.text())
	chapters.each(function(i, chapterName){
		///console.log($(chapterName).text());

	});


	$('#content pre, #content style').remove();
	$('#content br, #content style').remove();
	///$('#content h2, #content style').remove();



	for(i=0; i<15; i+0.5)
	{
		var table = $('#content').find('td') [i];


		var list = document.createElement('li');
		list.innerHTML = table.innerHTML;

		table.parentNode.insertBefore(list, table);
		table.parentNode.removeChild(table);

		$("ul").append(list);

		
		

	}

	

	console.log("git here")
	

	

});






