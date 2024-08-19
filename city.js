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
        { "id": "i4ZKWScKsR", "nom": "Bafoussam", "population": 285000, "departement": "Menoua", "isCovered": "true" },
        { "id": "At6Z87lRfd", "nom": "Dschang", "population": 120000, "departement": "Menoua", "isCovered": "true" },
        { "id": "nBGbSSrk7F", "nom": "Mbouda", "population": 90000, "departement": "Bamboutos", "isCovered": "true" },
        { "id": "YQbl6710ww", "nom": "Bangangté", "population": 65000, "departement": "Ndé", "isCovered": "true" },
        { "id": "7s5ChrlhW6", "nom": "Foumban", "population": 100000, "departement": "Noun", "isCovered": "false" },
        { "id": "2dwOnFi6kx", "nom": "Foumbot", "population": 55000, "departement": "Noun", "isCovered": "true" },
        { "id": "vdVZx2Xcsd", "nom": "Kékem", "population": 35000, "departement": "Haut-Nkam", "isCovered": "true" },
        { "id": "gNVulmIRBh", "nom": "Makénéné", "population": 28000, "departement": "Haut-Nkam", "isCovered": "false" },
        { "id": "hwNFnnQY10", "nom": "Bangou", "population": 20000, "departement": "Méfi", "isCovered": "false" },
        { "id": "fS7sDiVQ3C", "nom": "Bafang", "population": 60000, "departement": "Haut-Nkam", "isCovered": "true" }
    ]); 
 });

module.exports = app;