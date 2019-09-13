/**
 * Created by Harut on 27/05/2015.
 * Had ik nog iets meer tijd, kon ik alles gemaakt hebben :(
 * heb veel tijd verprutst aan kleinigheden..
 * Ik hoop dat dit volstaat om er toch door te zijn hehe..
 * grts Harut
 */

function setup() {
    var btnToevoegen = document.getElementById("add");
    console.log("knop gemaakt");
    btnToevoegen.addEventListener("click", artikelToevoegen);
}

function artikelToevoegen(){
    var txtmodel = document.getElementById("model");
    var model = txtmodel.value;
    // test document.getElementById("right").innerHTML += '<p>'+model+'</p>'
    var txtprijs = document.getElementById("price");
    var prijsv1 = txtprijs.value;
    var prijs;

    if (isPositiveNumber(prijsv1)) {
        prijs = prijsv1;
    }else {
        alert("Prijs moet een getal zijn.")
    }

    var txtomschrijving = document.getElementById("description");
    var omschrijving = txtomschrijving.value;

    var wifi;
    if(document.getElementById('nowifi').checked) {
    wifi = "Neen";
    }else if(document.getElementById('yeswifi').checked) {
    wifi = "Ja, ingebouwd";
    }else if(document.getElementById('yes-dongle').checked) {
    wifi = "Ja, met dongle (optie)";
    }

    var ddbLabel = document.getElementById("energy-label");
    var label = ddbLabel.value;

    if(model == undefined || prijs == undefined || wifi == undefined || label == "") {
        alert("Gelieve alles juist in te vullen en aan te klikken!")
    } else {
        document.getElementById("right").innerHTML += '<article><h3>' + model + '</h3><div class="large"><img alt="" id="im" class=".groot" src="images/tv-icon.png"><span class="priceTag">' + prijs + " €" + '</span></div><div>' + omschrijving + '</div><div><ul class="product-details"><li class="energy-label">Energie label: <span>' + label + '</span></li><li class="wi-fi">Wi-Fi: <span>' + wifi + '</span></li></ul></div><input id="rem" type="submit" value="Verwijderen"/><br class="clear" /></article>';
    }

        var btnVerwijderen = document.getElementById("rem");
    btnVerwijderen.addEventListener("click", artikelVewijderen);
}

function artikelVewijderen(){
    $(this).parent("article").remove();
}

function fotoGrootte (){
    var fotos = document.getElementById("img");
    fotos.addEventListener("click", function() {
        fotos.style.width("80px");
        console.log('verander klasse van img');
    });
}

function isPositiveNumber(text) {
    var number=parseInt(text, 10);
    return !isNaN(number) && number>0;
}

window.addEventListener("load", setup);