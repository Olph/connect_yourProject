$(document).ready(function() {
	//************#chat_liste scrollen************
	
	$("#chat_liste").mCustomScrollbar();
	
	//************.chat_kontakte_optionen toggeln************
	
	$(".chat_kontakt").mouseover(function () {
		$(this).find(".chat_kontakt_bild").animate({borderBottomRightRadius: 0}, 150);
		$(this).find(".chat_kontakt_head").animate({borderBottomRightRadius: 0}, 150);
		$(this).find(".chat_kontakt_option").animate({height: 55, opacity: 1}, 150);
	});
	
	$(".chat_kontakt").mouseleave(function () {
		$(this).find(".chat_kontakt_bild").animate({borderBottomRightRadius: 12}, 150);
		$(this).find(".chat_kontakt_head").animate({borderBottomRightRadius: 12}, 150);
		$(this).find(".chat_kontakt_option").animate({height: 0, opacity: 0}, 150);
	});
});