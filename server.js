require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon');
const allPokemon = require('./models/allPokemon');
const { connect, connection } = require('mongoose');

// Database connection
connect(process.env.MONGO_URI, {
    // Having these two properties set to true is best practice when connecting to MongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // This line of code will run the function below once the connection to MongoDB has been established.
  connection.once('open', () => {
    console.log('connected to mongo');
  });

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have specific the views directory every time we use the render method
app.set("views", "./views");

// Custom Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});


//I.N.D.U.C.E.S. for pokemons
//=========================
// Index
app.get('/', (req, res) => {
    console.log('Index Controller Func. running...');
    res.send(`
      <h1>
      <a href="/pokemon">Welcome to the Pokemon App!</a>
      </h1>
    `);
  });

  app.get('/pokemon', async (req, res) => {
    console.log('Index Controller Func. running...');
    try {
      const foundPokemon = await Pokemon.find();
      res.status(200).render("Index", { pokemon: foundPokemon });
    } catch (error) {
      console.error(error);
      res.status(400).send(err);
    }
  });

app.get('/pokemon', (req, res) => {
    console.log('Index Controller Func. running...');
    res.render("Index", { pokemon: Pokemon });
});

// This is our data for all pokemon names as I can't remember them)))
app.get('/pokemon/allnames', (req, res) => {
    res.send(allPokemon);
});


//  New: renders a form to submit name of another pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

app.post('/pokemon', async (req, res) => {
    try {
      const newPokemon = await Pokemon.create({
        name: req.body.name.toLowerCase(),
        img: "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase()
      });
    // redirect to the newly created pokemon's show page
      res.redirect(`/pokemon/${newPokemon._id}`);
    } catch (err) {
      res.status(400).send(err);
    }
  });

// Show

app.get('/pokemon/:id', async (req, res) => {
    try {
      // We are using the id given to us in the URL params to query our database.
      const foundPokemon = await Pokemon.findById(req.params.id);
      res.render('Show', { 
        pokemon: foundPokemon });
    } catch (err) {
      res.status(400).send(err);
    }
  });

//Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
