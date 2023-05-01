const React = require('react');

const div = {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const header = {
    color: '#ffffff',
    backgroundColor: '#808080',
  };
  

class New extends React.Component {
    render() {
        return (
            <div style={div}>
                <header style={header}>
                  <h1>Let's see how do you remember pokemon!</h1>
                  </header>;
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name="name" />
                    <input type="submit" value="Create Pokemon" />       
                </form>
                <create>
                  <a href="/pokemon/allnames">
                  <h2 style={{textAlign: "center"}}>Get a hint</h2>
                  </a>
                </create>
            </div>
        )
      }
};

module.exports = New;

