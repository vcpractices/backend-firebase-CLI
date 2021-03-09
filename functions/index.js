const functions = require("firebase-functions");
const express = require('express');

const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert('./credential.json'),
    databaseUrl: "https://test-firestore-db-f9e46-default-rtdb.firebaseio.com"
})


const app = express()

app.get('/hello-world', (req, res) => {
    res.status(200).json({
        message: 'Hello'
    })
})

app.use(require('./routes/products'))

exports.app = functions.https.onRequest(app);

