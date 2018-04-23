<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title>Test technique We Do Good</title>
        <link rel="stylesheet" href="index.css">
    </head>
 
    <body>

        <label title="enter a city name">
            <span class="labelText">Veuillez entrer le nom de la ville : </span>
            <input type="text" id="cityName" placeholder="Londre, Paris, ..."></input>
        </label>
        <button type="button" id="printAction" >Afficher la ville </button>
        <b><p id="resultat"></p> </b>

        <input type="button" onclick="demandeMeteoHTML(afficheMeteoHTML);" value="Afficher la météo">

        <center><table>
            <tr align="center">
                <td>Météo du jour</td>
            </tr>

            <tr align="center">
            <td>
                <iframe 
                    id ='image' width="99%" height="150">
                </iframe>
            </td>
            </tr>
        </table></center>

    <script src="./client.js">   </script>
    </body>
</html>