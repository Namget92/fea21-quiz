// Skriv en funktion som tar mitten-elementet
// från den givna arrayen och returnerar det värdet
//
// Hårdkodad index (t.ex. array[2]) är fel svar, utgå från att du inte vet längden på
// arrayen men att den alltid är ojämnt lång (dvs: 1, 3, 7, 9, 13).

const middle = (array) => {
  // Skriv din kod här
  return array[Math.floor(array.length / 2)];
};

const result1 = middle(["1", "2", "3", "4", "5"]); // "3"
const result2 = middle(["A", "B", "C", "D", "E", "F", "G", "H", "I"]); // "E"
console.log(result1);
console.log(result2);

module.exports = middle;
