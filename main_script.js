$(document).ready(function() {
	var url = location.protocol + "//" + location.host + location.pathname;
	
	//************Main Section************//
	//************first load************
	//***init***
	
	function bottom_anpassen () {
		var bottom_height = $("#main").height()-$("#head").height()-$("#middle").height()-22;
		
		$("#bottom").height(bottom_height);
	}
	
	function main_anpassen () {
		$("#main").height($(window).height());
	}
    
	//************#task_bar mouse events************
	
	$("#task_bar_chat_textfeld, .task_bar_chat_option, #task_bar_chat_konversation").mouseenter(function () {
		$(this).css({"border-color": "#ffa133"});
	});
	
	$("#task_bar_chat_textfeld, .task_bar_chat_option, #task_bar_chat_konversation").mouseleave(function () {
		$(this).css({"border-color": "black"});
	});
	
	//************Kontakt liste toggeln************
	//***init***
	
	function kontakt_liste_slidein (width_kontaktliste) {
		$('#holder').animate({height: 30}, 500);
		$('#kontakt_liste').animate({ width: 15, height: 30}, 500, function() {
			$('#kontakte').hide();
		});
		
		$('#task_bar').css({"background-color": "transparent", "opacity": "1", "cursor": "auto"});
		$('#task_bar').animate({ width: 705}, 500);
		$('#task_bar_right, #task_bar_left').show();
	}
	
	function kontakt_liste_slideout (width_kontaktliste) {
		$('#holder').animate({height: 200}, 500);
		$('#kontakt_liste').animate({ width: 681, height: 200}, 500, function() {
			$('#kontakte').show();
		});
		
		$('#task_bar').animate({ width: 24}, 500, function () {
			$('#task_bar_right, #task_bar_left').hide();
			$('#task_bar').css({"background-color": "#ffa133", "border-radius": "10px", "cursor": "pointer"});
		});
	}
	
	//***click holder***
	
	$('#holder').click( function() {
		var width_kontaktliste = $("#kontakt_liste").width();
		
		if(width_kontaktliste == 681){
			kontakt_liste_slidein(width_kontaktliste);
		}
		else if(width_kontaktliste == 15){
			kontakt_liste_slideout(width_kontaktliste);
		}
    });
    
    //***click task_bar***
    
    $('#task_bar').click( function(){
    	var width_kontaktliste = $("#kontakt_liste").width();
    	
    	kontakt_liste_slidein (width_kontaktliste);
    });
    
    //************head und middle toggeln************
    //***click #height_holder***
    
    $("#height_holder").click(function toggler() {
    	var height_middle = $("#middle").height();
		
		if(height_middle == 240){
			$("#linie").hide()
    		$("#middle").animate({height: "0"}, 500, function () {
				$("#middle").hide(function () {
    				bottom_anpassen ();
				});
				$('#head').css({"margin-bottom": "7px"});
			});
			
    	}
		else if(height_middle == 0){
			$('#head').css({"margin-bottom": "0px"});
    		$("#middle, #linie").show();
    		$("#middle").animate({height: "240"}, 500, function () {
				bottom_anpassen ();
			});
		}
	});
	
	//***main height anpassen***
	
	while ($("#main").height() != $(window).height()) {
		$("#main").height($(window).height());
	};
	
	//************Main Section End************//
	
	//***load***
	var previousSearch;
	
	$(window).load(function(){
		//***Größenanpassung***
		main_anpassen ();
		bottom_anpassen ();
		
		//First set of URL
		previousSearch = "";
		
		if (location.search == "") {
			var positions = ["m"];
			var modules = ["login"];
			
			changeLocation(positions, modules);
		}else{
			readLocation();
		};
		
		//***PHP Scripte laden***
		/*
		$("#chat_liste").load("./refresh_chat_liste.php");
		$("#middle").load("./templates_html/login.tpl")
		tools_loadTemplates("#middle", "./templates_html/login.tpl");
		document.location.hash = "main";
		
    	$("#kontakte").load("./load_kontakte.php");
    	*/
    });
	
	//************Navigation Section************//
	//***set section***//
	
	function changeLocation (positions, modules) {
		var positionsLength = positions.length;
		previousSearch = location.search;
		var newSearch = previousSearch;
		
		for (var i=0; i < positionsLength ; i++) {
			var vorzeichen = "&";
			
			if (newSearch == "") {
				vorzeichen = "?";
				var newSearch = vorzeichen + "modloc" + positions[i] + "=" + modules[i];
			}else{
				if (newSearch.indexOf(positions[i]) != -1) {
					//!!!Alte postion löschen!!!
				};
				
				var newSearch = newSearch + vorzeichen + "modloc" + positions[i] + "=" + modules[i];
			};
		};
			
		history.pushState(null, null, newSearch);
		
		readLocation();
	};
	
	//***set section end***//
	
	//***get section***//
	
	//alert("New Search: " + location.search);
	
	function readLocation (){
		
		alert("Alte URL: " + previousSearch);
		
		var newSearch = location.search;
		
		var index = 0;
		var nextIndex;
		
		while (nextIndex != -1){
			var index = newSearch.indexOf("=", index+1);
			
			var position = newSearch.substr(index-1, 1);
			
			alert("Position: " + position);
			
			var modulLength = newSearch.indexOf("&", index);
			
			if (modulLength == -1){
				modulLength = newSearch.length-(index+1);
			}
			
			alert("Länge: " + modulLength);
			
			var modul = newSearch.substr(index+1, modulLength);
			
			alert("Modul: " + modul);
			
			nextIndex = newSearch.indexOf("=", index+1);
			
			alert("Next Index: " + nextIndex);
		
			updateLocation(position, modul);
		}
		
		/*
		var numberOfPositionsIndexes = search.m
		
		var numberOfPositions = numberOfPositionsIndexes.

		alert("Number of Positions: " + numberOfPositions.length);
		
		var startIndex = search.indexOf(position + "=");
		
		alert("Länge von " + search + ": " + searchLength);
		
		alert("Position von " + position + " : " + startIndex);
		
		var modul = search.substr(startIndex+2, searchLength);
		
		alert("Gesetztes Modul an Position " + position + " : " + modul);
		*/
		
		//
		
		/*
		var modules = location.search;
		var startLocation = modules.indexOf(position);
		var endLocation = modules.indexOf("&", startLocation);
		
		if(endLocation == -1){
			endLocation = modules.length;
		};
		*/
		//alert("Start: " + startLocation + " End: " + endLocation);
		
		//$("#projekte").text("Start: " + startLocation + " End: " + endLocation);
	};
	 
	//***get section end***//
	
	
	//***updater section***//
	
	function updateLocation (position, tpl) {
		
		if (position != "") {
			if (tpl != "") {
				$(position).load(tpl);
			}
		};
		
		/*
		if (js != "") {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = js;
			$(position).append(script)
		};
		
		if (css != "") {
			var tag = "<link rel=\"stylesheet\" type=\"text/css\" href=" + css + ">";
			$("head").append(tag)
		};
		*/
		
	};
	
	//***updater section end***//
	
	
	//************Controller Section End************//
});