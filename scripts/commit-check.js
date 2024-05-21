/** @format */

const fs = require('fs');

// Controlla che sia stato fornito un percorso al file del messaggio di commit
if (process.argv.length < 3) {
  console.error('Errore: Nessun percorso del messaggio di commit fornito.');
  process.exit(1);
}

// Legge il file del messaggio di commit
const commitMsgFilePath = process.argv[2];
const commitMsg = fs.readFileSync(commitMsgFilePath, 'utf8').trim();

// Esegue le verifiche sul messaggio di commit
if (commitMsg.includes('riccardo_genova')) {
  console.warn('non dovresti poter committare');
}

console.log('Commit message:', commitMsg);

// Se necessario, aggiungi altre verifiche qui

process.exit(0);
