const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');
const allPokemon = require('./models/allPokemon');

// Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have specific the views directory every time we use the render method
app.set("views", "./views");

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
    res.render("Index", { pokemon: pokemon });
});

// This is our data for all pokemon names as I can't remember them)))
app.get('/pokemon/allnames', (req, res) => {
    res.send(allPokemon);
});


//  New: renders a form to submit name of another pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// Create: receives form data to create a new pokemon
app.post('/pokemon', (req, res) => {
    // Add the new pokemon to the pokemon array
    pokemon.push({
        name: req.body.name.toLowerCase(),
        img: "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase()
    });
    // Redirect to the newly created pokemon's show page
    res.redirect(`/pokemon/${pokemon.length - 1}`);
});

// Show
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
    //second param must be an object
    pokemon: pokemon[req.params.id],
    //there will be a variable available inside the jsx file called pokemon, its value is pokemon[req.params.id]
    });
});

//Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
