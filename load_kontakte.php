<script type="text/javascript" src="./load_kontakte_script.js"></script>

<?php
	$verbindung = mysql_connect("localhost", "Leon__admin", "Leon.1195")
	or die ("Fehler Verbindung MySQL");

	$selectDatenbank = mysql_select_db("Leon_Steinke_stones_connect")
	or die ("Fehler Verbindung Datenbank");

	$abfrage = "SELECT * FROM `profiele` ORDER BY `profiele`.`name` ASC";
	$ergebnis = mysql_query($abfrage);

	while ( $zeile =  mysql_fetch_array($ergebnis, MYSQL_NUM) ){
		$id = $zeile[0];
		$name = $zeile[1];
		
		echo 
		"<div class='kontakt' id='$id'>
			<p class='kontakt_p'>
				$name
			</b>
		</div>";		
	}

	mysql_close($verbindung);
?>