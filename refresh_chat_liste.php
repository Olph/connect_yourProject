<script type="text/javascript" src="./refresh_chat_liste_script.js"></script>

<?php
	/********chat kontakte von datenbank abfragen*******/

	
	$verbindung = mysql_connect("localhost", "Leon__admin", "Leon.1195")
	or die ("Fehler Verbindung MySQL");
	
	$selectDatenbank = mysql_select_db("Leon_Steinke_stones_connect")
	or die ("Fehler Verbindung Datenbank");
	
	$listen_abfrage = "SELECT * FROM `offenechats_liste`";
	$ergebnis_liste = mysql_query($listen_abfrage);
	
	$ids = "";
	
	while ( $zeile =  mysql_fetch_array($ergebnis_liste, MYSQL_NUM) ){
		$kontakt_id = $zeile[1];
		
		$ids = "$ids" . ", " . "'" . "$kontakt_id" . "'";
		
	}
	$ids = substr_replace($ids, '', 0, 1);
	
	$kontakt_abfrage = "SELECT * FROM `profiele` WHERE id IN ($ids) ORDER BY `profiele`.`name` ASC";
	$ergebnis_kontakt = mysql_query($kontakt_abfrage);

	while ( $zeile =  mysql_fetch_array($ergebnis_kontakt, MYSQL_NUM) ){
		$chat_kontakt_id = "chat_kontakt_" . $zeile[0];
		$name = $zeile[1];
		
		echo 
		"<div class='chat_kontakt' id='$chat_kontakt_id'>
			<div class='chat_kontakt_bild'>
				<img src='./profil_bilder/lukas_4.jpg' class='chat_kontakt_bild_img'>
			</div>
			<div class='chat_kontakt_head'>
				$name
			</div>
			<div class='chat_kontakt_option'>
				Teaser zum Status
			</div>
		</div>";		
	}
	
	mysql_close($verbindung);
?>