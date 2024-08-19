const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
  app.use((req, res) => {
    res.json([
        { "id": 1, "nom": "Bafoussam", "population": 285000, "departement": "Menoua", "isCovered": true },
        { "id": 2, "nom": "Dschang", "population": 120000, "departement": "Menoua", "isCovered": true },
        { "id": 3, "nom": "Mbouda", "population": 90000, "departement": "Bamboutos", "isCovered": true },
        { "id": 4, "nom": "Bangangté", "population": 65000, "departement": "Ndé", "isCovered": true },
        { "id": 5, "nom": "Foumban", "population": 100000, "departement": "Noun", "isCovered": false },
        { "id": 6, "nom": "Foumbot", "population": 55000, "departement": "Noun", "isCovered": true },
        { "id": 7, "nom": "Kékem", "population": 35000, "departement": "Haut-Nkam", "isCovered": true },
        { "id": 8, "nom": "Makénéné", "population": 28000, "departement": "Haut-Nkam", "isCovered": false },
        { "id": 9, "nom": "Bangou", "population": 20000, "departement": "Méfi", "isCovered": false },
        { "id": 10, "nom": "Bafang", "population": 60000, "departement": "Haut-Nkam", "isCovered": true }
    ]); 
 });

module.exports = app;