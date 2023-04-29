const React = require('react');

const div = {
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}

const header = {
  color: '#ffffff',
  backgroundColor: '#800080',
};

class Show extends React.Component {
   render () {
    const pokemon = this.props.pokemon;
    // Add .jpg to the image link
    const pokemonImageLink = pokemon.img + ".jpg";

    return (
        <div style={div}>
            <header style={header}>
                <h1>Gotta Catch {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}!</h1>         
            </header>
            <img src={pokemonImageLink} alt={`${pokemon.name} image`} />
            <a href={`/pokemon`}>
                <h2>Back to all pokemon</h2>
            </a>
        </div>
     );
    }
 }
 module.exports  = Show;
