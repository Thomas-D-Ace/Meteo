<?php

$variable1 = (isset($_GET["variable1"])) ? $_GET["variable1"] : NULL;
$key = "9090100a414cff95b0c03bc4f2944350";
$baseUrl = "http://api.openweathermap.org/data/2.5/weather"; 
$url = $baseUrl."?APPID=".$key."&q=".$variable1."&lang=fr&units=metric&mode=html";


echo $url;
?>

