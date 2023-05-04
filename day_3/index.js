let personne = {
    nom: "jedica",
    age: 22,
    taille: "1,57m",
    clothes: {
        color: "red"
    }
}
console.log(personne);

personne.exper = {
    dev: "2 jours"
}
console.log(personne);
 delete personne.clothes;
 console.log(personne);

 personne = {
    nom: "elyse",
    prenom: "jedica",
    nomComplet: function () {
        return personne.nom + personne.prenom;
    }
 }
 console.log(personne.nomComplet());

 personne.exper = [
    {
        post: "dev"
    },
    {
        post: "touriste"
    },
    {
        post: "cuisine"
    }
 ]
console.log(personne.exper);