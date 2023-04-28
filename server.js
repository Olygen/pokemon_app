const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');

//I.N.D.U.C.E.S. for pokemons
//=========================
// Index
app.get('/', (req, res) => {
    console.log('Index Controller Func. running...');
    res.send(`<h1> Welcome to the Pokemon App!</h1>`);
  });

app.get('/pokemon', (req, res) => {
    console.log('Index Controller Func. running...');
    res.send(pokemon);
})

//Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
