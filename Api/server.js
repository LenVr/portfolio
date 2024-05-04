const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, phone } = req.body;
    sendEmail(name, email, phone);
    res.send('Formulario enviado correctamente');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('../Public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});