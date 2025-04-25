const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Olá, servidor Node.js com Express funcionando!');
});
app.get('/info', (req, res) => {
    res.json({ linguagem: 'Node.js', biblioteca: 'Express', nome: "victor",hora: moment().format('DD/MM HH:mm:ss') });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
const moment = require('moment');
console.log("Data atual:", moment().format('DD/MM/YYYY HH:mm:ss'));