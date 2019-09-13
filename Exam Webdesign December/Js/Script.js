function showcontent() {
    var divc = document.getElementById("content");
    var divn = document.getElementById("newsletter");
    var green = document.getElementById("btnabout")
    var regular = document.getElementById("btnsubscribe")
    divc.style.display = "block";
    divn.style.display = "none";
    green.style.backgroundColor = "#558E6B";
    regular.style.backgroundColor = "black";
}

function showsubscribe() {
    var divn = document.getElementById("newsletter");
    var divc = document.getElementById("content");
    var green = document.getElementById("btnsubscribe")
    var regular = document.getElementById("btnabout")
    divc.style.display = "none";
    divn.style.display = "block";
    green.style.backgroundColor = "#558E6B";
    regular.style.backgroundColor = "black";
}

function valideer() {
    checknaam();
    checkEmail();
}

function checknaam() {
    var naam = document.getElementById("name");
    var filter = /^[a-zA-Z ]+$/;

    if (!filter.test(naam.value)) {
        alert("Ongeldige naam");
    }
}

function checkEmail() {
    var email = document.getElementById("email")
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        alert("Ongeldig E-mail adress")
    }
}