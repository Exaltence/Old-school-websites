/// <reference path="index.html" />
// JavaScript source code

function setup() {
    var btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
}

function valideer() {
    var elements;
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboorteDatum();
    valideerEmail();
    // zijn er elementen als invalid gemarkeerd?
    elements = document.getElementsByClassName("invalid");
    if (elements.length == 0) {
        window.alert("proficiat!");
    }
}

function valideerVoornaam() {
    var txtVoornaam = document.getElementById("txtVoornaam");
    var voornaam = txtVoornaam.value.trim();
    if (voornaam.length == 0) {
        reportError(txtVoornaam, "verplicht veld");
    } else if (voornaam.length > 30) {
        reportError(txtVoornaam, "max. 50 karakters");
    } else {
        clearError(txtVoornaam);
    }
}

function valideerFamilienaam() {
    var txtFamilienaam = document.getElementById("txtFamilienaam");
    var familienaam = txtFamilienaam.value.trim();
    if (familienaam.length == 0) {
        reportError(txtFamilienaam, "verplicht veld");
    } else if (familienaam.length > 50) {
        reportError(txtFamilienaam, "max. 50 karakters");
    } else {
        clearError(txtFamilienaam);
    }
}

function valideerGeboorteDatum() {
    var txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    var geboorteDatum = txtGeboorteDatum.value.trim();
    var yearText;
    var monthText;
    var dayText;

    var formatCorrect;
    // correcte lengte?
    if (geboorteDatum.length != 10) {
        reportError(txtGeboorteDatum, "verplicht veld");
    } else {
        formatCorrect = true;
        // streepjes op juiste plaats?
        if (formatCorrect && !(geboorteDatum.charAt(4) == '-' && geboorteDatum.charAt(7) == '-')) {
            formatCorrect = false;
        }
        // jaar gedeelte een getal?
        if (formatCorrect) {
            // year
            yearText = geboorteDatum.substring(0, 4);
            if (!isPositiveNonZeroNumber(yearText)) {
                formatCorrect = false;
            }
        }
        // maand gedeelte een getal?
        if (formatCorrect) {
            // month
            monthText = geboorteDatum.substring(5, 7);
            if (!isPositiveNonZeroNumber(monthText)) {
                formatCorrect = false;
            }
        }
        // dag gedeelte een getal?
        if (formatCorrect) {
            // day
            dayText = geboorteDatum.substring(8, 11);
            if (!isPositiveNonZeroNumber(dayText)) {
                formatCorrect = false;
            }
        }

        if (formatCorrect) {
            clearError(txtGeboorteDatum);
        } else {
            reportError(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");
        }
    }
}

function valideerEmail() {
    var txtEmail = document.getElementById("txtEmail");
    var email = txtEmail.value.trim();
    var formatCorrect;
    var idx;
    if (email.length == 0) {
        reportError(txtEmail, "verplicht veld");
    } else {
        formatCorrect = true;
        idx = email.indexOf("@");

        if (idx < 1 || idx == email.length - 1) {
            // @ teken komt niet voor, of helemaal vooraan of helemaal achteraan de tekst
            formatCorrect = false;
        }
        idx = email.indexOf("@", idx + 1);
        if (formatCorrect && idx != -1) {
            // @-teken komt meermaals voor
            formatCorrect = false;
        }
        if (formatCorrect) {
            clearError(txtEmail);
        } else {
            reportError(txtEmail, "geen geldig email adres");
        }
    }
}


function isPositiveNumber(text) {
    var number = parseInt(text, 10);
    return !isNaN(number) && number >= 0;
    // merk op dat een tekst als "34m" ook aanvaard wordt, wat eigenlijk niet de bedoeling is
    // een betere oplossing zou bv. een reguliere expressie gebruiken
}

function isPositiveNonZeroNumber(text) {
    var number = parseInt(text, 10);
    return !isNaN(number) && number > 0;
    // merk op dat een tekst als "34m" ook aanvaard wordt, wat eigenlijk niet de bedoeling is
    // een betere oplossing zou bv. een reguliere expressie gebruiken
}


function reportError(element, message) {
    var elementId = element.getAttribute("id"); // bv. txtVoornaam
    var errElementId = "err" + elementId.substring(3, elementId.length); // bv. errVoornaam
    var errElement = document.getElementById(errElementId);
    element.className = "invalid";
    errElement.innerHTML = message;
}

function clearError(element) {
    var elementId = element.getAttribute("id"); // bv. txtVoornaam
    var errElementId = "err" + elementId.substring(3, elementId.length); // bv. errVoornaam
    var errElement = document.getElementById(errElementId);
    element.className = "";
    errElement.innerHTML = "";
}

window.addEventListener("load", setup);

