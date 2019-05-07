import React from 'react';
import './App.css';
import DisplayData from './Components/DisplayData';
import CitationButton from './Components/CitationButton'

const simpsonpersonage = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left",
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { description: simpsonpersonage };
  }
  getSimpson = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        description: data[0]
      })
    })
  }


  render() {
 
    return (
      <div className="App">
        <DisplayData description={this.state.description} />
        <CitationButton getSimpson={this.getSimpson} />
      </div>
    );
  }
}
  export default App;