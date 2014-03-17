// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(document).foundation();


function random_quote () {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","quotes/quotes.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;

	var x=xmlDoc.getElementsByTagName("quote");
	var random_number = Math.floor(Math.random() * (x.length));

	var rquote = x[random_number].getElementsByTagName("text")[0].childNodes[0].nodeValue;
	var rcite = x[random_number].getElementsByTagName("author")[0].childNodes[0].nodeValue;

	$("blockquote").prepend(rquote);
	$("cite").prepend(rcite);

}
