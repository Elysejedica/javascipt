 const titre = document.getElementById("coco");
// const nom = document.getElementById("nom"); 
console.log(titre);

titre.style.color = "red";

titre.setAttribute("class", "test");
// console.log(nom.getAttribute("test"));

const paragraphe = document.getElementsByTagName("p")
console.log(paragraphe);

for(let key in paragraphe) {
    console.log(paragraphe[key]);
    paragraphe[key].setAttribute("class", "para")
}
// const valleur1Add = document.getElementById("premiernombre1");
// const valleur2Add = document.getElementById("secondeNombre1");
// const btnAdd = document.getElementById("buttonAdd");
// const resultAdd = document.getElementById("result-add");

// btnAdd.onclick = function() {
//     resultAdd.innerText = Number(valleur1Add.value) + Number(valleur2Add.value)
// }

// const valleur1Sous = document.getElementById("premiernombre2");
// const valleur2Sous = document.getElementById("secondeNombre2");
// const btnSous = document.getElementById("buttonSous");
// const resultSous = document.getElementById("result-soust");

// btnSous.onclick = function() {
//     resultSous.innerText = Number(valleur1Sous.value) - Number(valleur2Sous.value)
// }