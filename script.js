//fonction 1 : choix utlisateur
//fonction 2 : choix ordinateur
//fonction 3: comparaison
//fonction 4: résultat

//Fonction 1
//role: afficher ce que le joueur a choisis entre "pierre", "feuille" et "ciseaux"
//parametre: 
//return: choix du joueur

function choixJoueur() {
    return prompt("Que choisis tu ? : Pierre, feuille ou cisaux ")
}


//Fonction 2
//role: afficher ce que l'ordinateur a choisis entre "pierre", "feuille" et "ciseaux"
//parametre: 
//return: nombre aleatoire

function nbrAleatoire() {
    let nbrPioche = Math.floor(Math.random() * 3)
    return nbrPioche
}

//role: converrir le chiffre piocher en choix de l'ordi
//parametre : le chiffre
//return: la convertion

function convertir(nbrPioche) {

    let choixOrdi;

    if (nbrPioche === 0) {
        return "ciseaux"
    } else if (nbrPioche === 1) {
        return "pierre"
    } else {
        return "feuille"

    }
}


//role : comparer les resultat de l'utilisateur et de l'ordinateur
//parametre : des choix de l'utilistaeur et de l'ordi
//return: message annoncant le gagnant 

function choixVainqueur(choixJoueur, choixOrdi) {
    //si le joueur et l'ordinateur sont les mêmes -> égalité
    if (choixJoueur = choixOrdi) {
        return "égalité"
    }
    //si le joueur choisi "pierre" et l'ordinateur "ciseaux" ->  joueur gagne
    else if (choixJoueur === "pierre" && choixOrdi === "ciseaux") {
        return "tu as gagné"
    }
    //si le joueur choisi "feuille" et l'ordinateur "pierre" ->  joueur gagne
    else if (choixJoueur === "feuille" && choixOrdi === "pierre") {
        return "tu as gagné"
    }
    //si le joueur choisi "ciseaux" et l'ordinateur "feuille" -> joueur gagne
    else if (choixJoueur === "ciseaux" && choixOrdi === "feuille") {
        return "tu as gagné"
    }
    //sinon ordinateur gagne
    else {
        return "tu as perdu"
    }
}


//afficher le gagnant
//role: afficher le resultat
//parametre : le winner
//return : rien

function afficheResultat(choixOrdi, choixJoueur, gagnant) {
    alert(`l'orinateur à choisis ${choixOrdi}, tu as choisis ${choixJoueur} donc : ${gagnant}`)
}


//role : lancer le scenario
//parametre : non
//return: non

function scenario(){
    let choixUtili = choixJoueur();
    let nbrAleaPioche = nbrAleatoire();
    let choixOrdi = convertir(nbrAleaPioche);
    let gagnant = choixWinner(choixOrdi, choixUtili)
    afficheResultat(choixOrdi, choixUtili, choixWinner)
}

scenario()