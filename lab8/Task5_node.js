const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(q) {
  return new Promise(resolve => rl.question(q, ans => resolve(ans)));
}

(async function() {
  function parseIntOrNull(s) {
    const n = parseInt(s, 10);
    return Number.isNaN(n) ? null : n;
  }

  let n;
  while (true) {
    const ans = await question('Enter how many numbers you want in the array: ');
    if (ans === null || ans.trim() === '') { console.log('Please type a number.'); continue; }
    const p = parseIntOrNull(ans);
    if (p === null) { console.log('Invalid integer. Try again.'); continue; }
    n = p; break;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    while (true) {
      const ans = await question(`Enter number ${i + 1}: `);
      const p = parseIntOrNull(ans);
      if (p === null) { console.log('Invalid integer. Try again.'); continue; }
      numbers.push(p); break;
    }
  }

  console.log('Your new array is:', numbers);
  rl.close();
})();