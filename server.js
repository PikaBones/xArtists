const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors'); // Importez le module cors

const app = express();
const port = 3001; // Choisissez le port de votre choix

app.use(cors()); // Utilisez le middleware cors

app.use(bodyParser.json());

app.post('/execute-script', (req, res) => {
  const argument = req.body.argument;

  // Exécutez le script Bash avec l'argument reçu en tant que paramètre -w
  exec('./sanit.sh -w ' + argument, (error, stdout, stderr) => {
    if (error) {
      console.error('Erreur lors de l\'exécution du script Bash:', error);
      res.status(500).send('Erreur lors de l\'exécution du script Bash.');
    } else {
      console.log('Script exécuté avec succès.');
      const scriptOutput = stdout;
      res.send(scriptOutput);
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
