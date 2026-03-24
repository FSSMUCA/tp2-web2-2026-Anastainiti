let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

//  Calcul du sous-total
let sousTotal = prix * quantite;
console.log(`Sous-total: ${sousTotal} MAD`);

//  Calcul de la réduction
// Appliquer seulement si codePromo n'est pas null ET estMembre est true
let reduction = (codePromo ?? false) && estMembre ? sousTotal * (reductionPourcentage / 100) : 0;
console.log(`Réduction: ${reduction} MAD`);

//  Calcul du total final
let totalFinal = sousTotal - reduction;
console.log(`Total final: ${totalFinal} MAD`);

//  Vérifier si le solde est suffisant
let paiementAccepte = soldeCompte >= totalFinal;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

//  Calcul du nouveau solde si paiement accepté
let nouveauSolde = paiementAccepte ? soldeCompte - totalFinal : soldeCompte;
if (paiementAccepte) console.log(`Nouveau solde: ${nouveauSolde} MAD`);

//  Récapitulatif
console.log("\n===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${reduction} MAD`);
console.log(`Total     : ${totalFinal} MAD`);
console.log(`Statut    : ${paiementAccepte ? "Paiement accepté" : "Solde insuffisant"}`);
console.log(`Solde     : ${nouveauSolde} MAD`);
console.log("=========================");