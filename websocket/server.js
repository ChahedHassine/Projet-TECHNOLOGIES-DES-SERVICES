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
wss.on('connection', function connection(ws) { 
    console.log('New client connected');
    setInterval(() => {
        
        const index = Math.floor(Math.random() * funFacts.length);
        
        ws.send(funFacts[index]);
    }, 10 * 1000);
    ws.on('message', function incoming(message) {
        console.log(`received ${message}`);
    });
});

app.get('/', (req, res) => res.send('hello world')),
server.listen(3000, () => console.log('listening on port : 3000'));