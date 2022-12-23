// Skriv en funktion som räknar antalet tecken
// som anges som parameter till funktionen

function count(string) {
  // Skriv din kod här inne
  let num = 0;
  for (let index = 0; index < string.length; index++) {
    num = num + 1;
  }
  return num;
}

// Ändra inte dessa
const result = count("ABCDEFG123");
console.log(result); // 10

module.exports = count;
