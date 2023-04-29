const React = require('react')
class Show extends React.Component {
   render () {
    const pokemon = this.props.pokemon;
    return (
        <div>
            <h1> Show Page </h1>
            The {pokemon.name} looks like {pokemon.img}
        </div>
     );
    }
 }
 module.exports  = Show;
