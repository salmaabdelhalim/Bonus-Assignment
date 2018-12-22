$(document).ready(function(){

	$("#done").click(function(){

		var booktitle = $("#Booktitle").val();
		$("#title").text(booktitle);

		var booksubtitle = $("#Booksubtitle").val();
		$("#subtitle").text(booksubtitle);

		var authorname = $("#Authorname").val();
		$("#author").text(authorname);

		var publisher = $("#Publisher").val();
		$("#publish").text(publisher);

		var publishyear = $("#Publishingyear").val();
		$("#year").text(publishyear);

		var backgroundcolour = $("#Backgroundcolour").val();
		$("#clr").css("background-color", backgroundcolour);

		var col1 = $("#col1").val();
		$("#title").css("color", col1);

		var col2 = $("#col2").val();
		$("#subtitle").css("color", col2);

		var col3 = $("#col3").val();
		$("#author").css("color", col3);

		var col4 = $("#col4").val();
		$("#publish").css("color", col4);

		var col5 = $("#col5").val();
		$("#year").css("color", col5);
	
	}) 
});