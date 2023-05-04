let personnes = [
    {
        nom: "Eliot",
        prenom: "Jilio",
        age: 22,
        cin: 301040369309,
        addresse: "Cite Platon",
        sexe: "Masculin",

    },
    {
        nom: "Andry",
        prenom: "Nirina",
        age: 52,
        cin: 301456231309,
        addresse: "Anosy",
        sexe: "Masculin",

    },
    {
        nom: "Nandrasana",
        prenom: "Tinah",
        age: 20,
        cin: 301304369309,
        addresse: "Analakely",
        sexe: "Feminin",

    },
    {
        nom: "Vola",
        prenom: "Nandrasana",
        age: 30,
        cin: 301778952309,
        addresse: "Tsararivotra",
        sexe: "Feminin",

    },
    {
        nom: "Sanda",
        prenom: "Bruno",
        age: 32,
        cin: 301321654309,
        addresse: "Betongolo",
        sexe: "Masculin",

    },
    {
        nom: "Hery",
        prenom: "Behevitra",
        age: 23,
        cin: 301852741309,
        addresse: "Tsiadana",
        sexe: "Masculin",

    },
    {
        nom: "Pascal",
        prenom: "Nomena",
        age: 36,
        cin: 301657951309,
        addresse: "Ampitatafika",
        sexe: "Masculin",

    },
    {
        nom: "Julia",
        prenom: "Manoelah",
        age: 22,
        cin: 30963842309,
        addresse: "Ambalamanasy",
        sexe: "Feminin",

    },
    {
        nom: "Stevie",
        prenom: "Jilliete",
        age: 21,
        cin: 301953157309,
        addresse: "Ambalakisoa",
        sexe: "Feminin",

    },
    {
        nom: "Najaina",
        prenom: "Jilianot",
        age: 25,
        cin: 301123456309,
        addresse: "Mangarano",
        sexe: "Masculin",

    },
    {
        nom: "Nambinina",
        prenom: "Elvinah",
        age: 20,
        cin: 301789456309,
        addresse: "Ankirihiry",
        sexe: "Feminin",

    },
    {
        nom: "Tianoh",
        prenom: "Jean",
        age: 19,
        cin: 301040369309,
        addresse: "Morarano",
        sexe: "Masculin",

    },
    {
        nom: "Elyore",
        prenom: "Junior",
        age: 22,
        cin: 301040369309,
        addresse: "Mangarano",
        sexe: "Masculin",

    },
    {
        nom: "Julle",
        prenom: "Tsilavina",
        age: 26,
        cin: 301040369309,
        addresse: "Ankatso",
        sexe: "Masculin",

    },
    {
        nom: "Dadju",
        prenom: "Ronaldo",
        age: 21,
        cin: 301040369309,
        addresse: "Tsiadana",
        sexe: "Masculin",

    },
    {
        nom: "Tongasoa",
        prenom: "Julicia",
        age: 22,
        cin: 301040369309,
        addresse: "Mananara",
        sexe: "Feminin",

    },
    {
        nom: "Lalaina",
        prenom: "Pricio",
        age: 30,
        cin: 301040369309,
        addresse: "Befandriana",
        sexe: "Masculin",

    },
    {
        nom: "Antsa",
        prenom: "Arinala",
        age: 24,
        cin: 301040369309,
        addresse: "Mampiadana",
        sexe: "Feminin",

    },
    {
        nom: "Tsila",
        prenom: "Delphin",
        age: 22,
        cin: 301040369309,
        addresse: "Tanambao",
        sexe: "Masculin",

    },
]

// let resultat = []
// let j = 0
// for (let i = 0; i < personnes.length; i++) {
//     if (personnes[i].age > 25) {
//         resultat[j] = personnes[i]
//         j++;
//     }

// }
// console.log(resultat);

// let nombreHomme = 0
// let nombreFemme = 0
// for (let i = 0; i < personnes.length; i++) {
//     if (personnes[i].sexe === "masculin") {
//         nombreHomme++
//     } else {
//         nombreFemme++
//     }
// }

//     console.log(nombreHomme);
//     console.log(nombreFemme);

//reduce, map, filter

const place = document.querySelector(".place");

for (let i = 0; i < personnes.length; i++) {
    
    place.innerHTML += `<tr>
    <td class="nom"><p>${personnes[i].nom}</p> </td>
    <td class="prenom"> ${personnes[i].prenom}</td>
    <td class="age">${personnes[i].age}</td>
    <td class="CIN">${personnes[i].cin}</td>
    <td class="sexe">${personnes[i].sexe}</td>
    <td class="addresse">${personnes[i].addresse}</td>
</tr>`
    
}