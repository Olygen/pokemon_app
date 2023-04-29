const React = require("react");

const header = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textAlign: 'center'
};

const mainPage = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

//   const mainPage = {
//     display: 'grid',
//     gridTemplateColumns: '15vw 15vw 15vw',
//     gridTemplateRows: '15vw 15vw 15vw',
//     justifyItems: 'stretch',
//     justifyContent: 'center',
//   }


class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <header style={header}>
            <h1>See All The Pokemon!</h1>         
        </header>
        <container  style={mainPage}>
            {pokemon.map((pokemon, i) => {
                // Capitalize first letter of pokemon name
            //     const capitalizedPokemonName =
            //   pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1);
              
                // Add .jpg to the image link
                const pokemonImageLink = pokemon.img + ".jpg";

                return (
                    <div key={i}>
                        <a href={`/pokemon/${i}`}>
                        <img style={{ width: '40%' }} src={pokemonImageLink} alt={`${pokemon.name} image`} />
                        </a>{" "}
                    </div>                     
                );
            })}
        </container>
      </div>
    );
  }
};

module.exports = Index;