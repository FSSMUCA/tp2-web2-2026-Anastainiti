let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const variables = { nom, age, ville, score, actif };

console.log("=== Partie A : opérateur ?? ===");
for (let [key, valeur] of Object.entries(variables)) {
  console.log(`${key} ?? "valeur par défaut" -> ${valeur ?? "valeur par défaut"}`);
}

console.log("\n=== Partie B : opérateur || ===");
for (let [key, valeur] of Object.entries(variables)) {
  console.log(`${key} || "valeur par défaut" -> ${valeur || "valeur par défaut"}`);
}

console.log("\n=== Partie C : comparaison ?? vs || ===");
for (let [key, valeur] of Object.entries(variables)) {
  let resultatNullish = valeur ?? "valeur par défaut";
  let resultatOr = valeur || "valeur par défaut";
  let comparaison = resultatNullish === resultatOr ? "même résultat" : "résultat différent";
  console.log(`${key} : ?? et || -> ${comparaison}`);
}