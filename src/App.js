import React from 'react';
import ColorsList from './components/colors-list/ColorsList.component';

import './App.css';
import Header from './components/header/Header.component.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: '',
      searchColors: ''
    }
  }

  componentDidMount() {
    const getColors = async () => {
      try {
        const response = await fetch('https://my-colors-api.herokuapp.com/api/v1/colors/')
        const data = await response.json();
        const colors = await data.colors;
        this.setState({ colors: colors });
      } catch (err) {
        console.error(err)
      }
    }
    getColors();
  }

  handleSearch = (searchColors) => {
    this.setState({ searchColors: searchColors })
  }

  render() {
    const colors = Array.from(this.state.colors);

    return (
      <div className="App">
        <Header
          searchFunction={this.handleSearch}
          searchField={this.state.searchColors} />
        <ColorsList
          colorsList={colors}
          searchField={this.state.searchColors} />
      </div>
    );
  }
}

export default App;
