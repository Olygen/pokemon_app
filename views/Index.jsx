const React = require("react");

const header = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <header style={header}>
            <h1>See All The Pokemon!</h1>         
        </header>
        <ul>
            {pokemon.map((pokemon, i) => {
                // Capitalize first letter of pokemon name
                const capitalizedPokemonName =
              pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1);
              
                // Add .jpg to the image link
                const pokemonImageLink = pokemon.img + ".jpg";

                return (
                    <li key={i}>
                        {/* The name is  {" "} */}
                        <a href={`/pokemon/${i}`}>
                            {capitalizedPokemonName}
                        </a>{" "}
                        <img src={pokemonImageLink} alt={`${pokemon.name} image`} />
                    </li>                     
                );
            })}
        </ul>
      </div>
    );
  }
};

module.exports = Index;