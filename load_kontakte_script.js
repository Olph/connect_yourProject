$(document).ready(function() {
	//************.kontakte mouse events************
	
	$(".kontakt").mouseenter(function () {
		$(this).css({"width": "104px", "height": "104px", "background-color": "#FFA133", "margin":"1px"});
	});
	
	$(".kontakt").mouseleave(function () {
		$(this).css({"width": "100px", "height": "100px", "background-color": "white", "margin":"3px"});
	});
	
	//************.kontakt draggable machen************
	
	$(".kontakt").draggable({
		containment:"document",
		appendTo: "body",
		helper: "clone",
		opacity: 0.5
	});
	
	//************id ziehen, versenden und kontakt einfügen************
	//***init var***
	
	var kontakt_id;
	
	//***idziehen und in var schreiben***
	
	$(".kontakt").mousedown(function() {
		kontakt_id = $(this).attr('id');
	});
	
	//***id versenden und chat liste aktualisieren***
	
	$( "#chat_liste" ).droppable({
		tolerance: "pointer",
		drop: function( event, ui ) {
			$.ajax({
				type: "POST",
				url: "./kontakt_id_add_chat.php",
				data: "kontakt_id=" + kontakt_id,
				success: function (msg) {
					if(msg == "true") {
						$("#chat_liste").load("./refresh_chat_liste.php", function() {
						});
					}
					else{
						alert ("fehler in php oder ajax")
					}
				}
			});
		}
	});
});