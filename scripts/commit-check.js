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

// Lista di nomi validi
const validNames = ['group', 'alessio_di_noto', 'andrea_militano', 'emanuele_fava', 'francesco_urso'];

// Esegue le verifiche sul messaggio di commit
if (commitMsg.includes('riccardo_genova')) {
  console.warn('Riccardo, non dovresti poter committare');
  process.exit(1);
}

// Verifica se il nome è corretto e ottieni il nome dell'utente
let authorizedUser = null;
for (const name of validNames) {
  if (commitMsg.includes(name)) {
    authorizedUser = name;
    break;
  }
}

if (authorizedUser) {
  console.log(`Utente: ${authorizedUser} autorizzato`);
  console.log('Ok, procediamo . . .');
  console.log('Commit message:', commitMsg);
} else {
  console.warn('Il committente non è valido. Commit message:', commitMsg);
  process.exit(1);
}

// Se necessario, aggiungi altre verifiche qui

process.exit(0);
