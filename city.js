const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Permettre l'accès à l'API depuis différents domaines (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Autoriser toutes les origines
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Autoriser les méthodes HTTP
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Autoriser certains en-têtes
    next();
});

let citys = [
    { "id": 1, "nom": "Bafoussam", "population": 285000, "departement": "Menoua" },
    { "id": 2, "nom": "Dschang", "population": 120000, "departement": "Menoua" },
    { "id": 3, "nom": "Mbouda", "population": 90000, "departement": "Bamboutos" },
    { "id": 4, "nom": "Bangangté", "population": 65000, "departement": "Ndé" },
    { "id": 5, "nom": "Foumban", "population": 100000, "departement": "Noun" },
    { "id": 6, "nom": "Foumbot", "population": 55000, "departement": "Noun" },
    { "id": 7, "nom": "Kékem", "population": 35000, "departement": "Haut-Nkam" },
    { "id": 8, "nom": "Makénéné", "population": 28000, "departement": "Haut-Nkam" },
    { "id": 9, "nom": "Bangou", "population": 20000, "departement": "Méfi" },
    { "id": 10, "nom": "Bafang", "population": 60000, "departement": "Haut-Nkam" }
];

app.get('/citys', (req, res) => {
    res.json(citys);
});

app.get('/citys/:id', (req, res) => {
    const cityId = parseInt(req.params.id);
    const city = citys.find(city => city.id === cityId);

    if (city) {
        res.json(city);
    } else {
        res.status(404).json({ error: 'City not found' });
    }
});

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
