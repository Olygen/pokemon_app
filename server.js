const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');

// Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have specific the views directory every time we use the render method
app.set("Views", "./views");

// Custom middleware
app.use(express.urlencoded({ extended:false} ));

//I.N.D.U.C.E.S. for pokemons
//=========================
// Index
app.get('/', (req, res) => {
    console.log('Index Controller Func. running...');
    res.send(`<h1> Welcome to the Pokemon App!</h1>`);
  });

  app.get('/pokemon', (req, res) => {
    console.log('Index Controller Func. running...');
    res.render("Index", {pokemon});
});

//Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
