const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server });

const funFacts = [
    'Covid 19 ',
    'Hello world',
    'le nombre de décés est 118000',
    'votre nom est',
    'votre pénom est',
];

// lancer la fonction connection lorsque un client se connecte
// a notre server ws
wss.on('connection', function connection(ws) {
    // dans la fonction de l'event connection
    // on spécifie la logique websocket
    console.log('New client connected');
    // lancer la methode dans setinterval chaque X temps
    setInterval(() => {
        // choisir un element de funFacts par hasard
        const index = Math.floor(Math.random() * funFacts.length);
        // retourner au client funFacts[index]
        ws.send(funFacts[index]);
    }, 10 * 1000);
    // au cas ou on veut récuperer les données envoyés
    // par le client selon un evenement (e.g. message)
    ws.on('message', function incoming(message) {
        console.log(`received ${message}`);
        // console.log('received ' + message);
    });
});

app.get('/', (req, res) => res.send('hello world')),

    server.listen(3000, () => console.log('listening on port : 3000'));