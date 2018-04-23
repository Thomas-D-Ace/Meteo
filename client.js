var button = document.getElementById('printAction');
var resultat = document.getElementById('resultat'); 
var cityName = document.getElementById('cityName');

button.addEventListener("click", printCityName );
cityName.addEventListener("change", printCityName);


function printCityName() {
  if(cityName.value == ''){
    var text = "Vous n'avez pas sélectionné de ville.";
    resultat.innerHTML=text;
  }else{
    var text = "Vous avez sélectionné la ville : ";
    text = text + cityName.value;
    resultat.innerHTML=text;
  }
};

function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}

function afficheErreur(){
	alert("Impossible d'afficher la météo.");
};

function demandeMeteoHTML(callback){
	var ville = encodeURIComponent(cityName.value);
	var xhr = getXMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText); 
		}
	};
	xhr.open( "GET", "traite.php?variable1=" + ville, true );
	xhr.send(null);
};

function afficheMeteoHTML(sData){

	document.getElementById('image').src = sData;
};