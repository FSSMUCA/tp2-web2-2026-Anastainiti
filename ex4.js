
const pairs = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let diffCount = 0;

for (const [a, b] of pairs) {
  const eq = a == b;
  const seq = a === b;
  if (eq && !seq) diffCount++;
  console.log(`${String(a).padEnd(10)} == ${String(b).padEnd(10)} -> ${eq}   |   ${String(a).padEnd(10)} === ${String(b).padEnd(10)} -> ${seq}`);
}

console.log('---');
console.log(`${diffCount} paire(s) où == et === donnent des résultats différents`);