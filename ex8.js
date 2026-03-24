let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

//  Correction du nom
let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

//  Correction de l'âge
let ageNum = parseInt(age);
let ageValide = (!isNaN(ageNum) && ageNum > 0);

//  Validation email
let emailValide = false;
let positionArobase = email.indexOf("@");
if (positionArobase !== -1) {
  let pointApres = email.indexOf(".", positionArobase);
  if (pointApres !== -1) emailValide = true;
}

//  Score du jeu
let scoreNum = parseInt(scoreJeu);
if (isNaN(scoreNum)) scoreNum = 0;

//  estAdmin
let estAdminBool = estAdmin === "true";

//  Dernière connexion
let derniereConnexionFinale = derniereConnexion ?? "Jamais connecté";

//  Nombre de connexions
let nombreConnexionsNum = parseInt(nombreConnexions);
let nombreConnexionsAffichage = nombreConnexionsNum === 0 ? "Aucune connexion" : nombreConnexionsNum;

//  Rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageNum} (${ageValide ? "valide" : "invalide"})`);
console.log(`email            : "${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`);
console.log(`scoreJeu         : ${scoreNum} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${estAdminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${derniereConnexionFinale}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nombreConnexionsAffichage}" (${nombreConnexionsNum} après conversion)`);
console.log("================================");