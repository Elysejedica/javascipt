



const nom = document.getElementById("vos_nom");
const prenom = document.getElementById("vos_prenom");
const age = document.getElementById("votre_age");
const cin = document.getElementById("votre_numCin");

const nom1 = document.getElementById("tape_nom");
const prenom1 = document.getElementById("tape_prenom");
const age1 = document.getElementById("tape_age");
const Cin1 = document.getElementById("tape_cin");

const span = document.getElementById("nom-span");
const preSpan = document.getElementById("prenom-span");
const ageSpan = document.getElementById("age-span");
const cinSpan = document.getElementById("cin-span");

const button = document.getElementById("button_click");


nom.onkeyup = function() {
    nom.style.borderColor= ""
    span.style.color = ""
    nom1.innerText = nom.value;
}

prenom.onkeyup = function() {
    prenom1.innerText = prenom.value;
    prenom.style.borderColor = "";
    preSpan.style.borderColor = "";
    preSpan.style.color = "";
}

age.onkeyup = function() {
    age1.innerText = age.value;
    age.style.borderColor = "";
    ageSpan.style.color = "";
}

cin.onkeyup = function() {
    Cin1.innerText = cin.value;
    cin.style.borderColor = "";
    cinSpan.style.color = "";
}

button.onclick = function() {
    if (nom.value == "") {
        nom.style.borderColor= "red";
        span.style.color = "red";
    }
    if(prenom.value == "") {
        prenom.style.borderColor = "red";
        preSpan.style.color = "red";
    }

    if(age.value == "") {
        age.style.borderColor = "red";
        ageSpan.style.color = "red";
    }
    if(cin.value == "") {
        cin.style.borderColor = "red";
        cinSpan.style.color = "red";
    }


}
 