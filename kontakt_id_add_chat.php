<?php
	$verbindung = mysql_connect("localhost", "Leon__admin", "Leon.1195")
	or die ("Fehler Verbindung MySQL");
	
	$selectDatenbank = mysql_select_db("Leon_Steinke_stones_connect")
	or die ("Fehler Verbindung Datenbank");
	
	$kontakt_id = $_POST["kontakt_id"];
	
	$add_kontakt_id = "INSERT INTO offenechats_liste (kontakt_id) VALUES ('$kontakt_id')";
	
	$eintrag_erstellen = mysql_query($add_kontakt_id);
	
	mysql_close($verbindung);
	
	echo "true";
?>