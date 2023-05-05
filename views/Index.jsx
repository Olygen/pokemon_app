const React = require("react");

const header = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textAlign: 'center',
  fontFamily: "Noto Sans, Arial, sans-serif",
  paddingTop: "1px",
  paddingBottom: "10px",
  marginBottom: "30px"
};

const mainPage = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

//   const mainPage = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     justifyItems: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }


class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <header style={header}>
            <h1>See All The Pokemon!</h1> 
            Remember their names? Click and check if you are right!        
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
                        <a href={`/pokemon/${pokemon._id}`}>
                        <img style={{ width: '150px' }} src={pokemonImageLink} alt={`${pokemon.name} image`} />
                        </a>{" "}
                    </div>                     
                );
            })}
        </container>
        <create>
            <a href="/pokemon/new">
            <h2 style={{textAlign: "center"}}>Remember other pokemon?</h2>
            </a>
        </create>
      </div>
    );
  }
};

module.exports = Index;