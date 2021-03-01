import React from 'react';
import Home from './pages/Home/Home';

/* STYLES */
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      searchColors: '',
      loading: false,
      currentPage: 1,
    }
  }

  componentDidMount() {
    const getColors = async () => {
      try {
        this.setState({ loading: true });
        const response = await fetch('https://my-colors-api.herokuapp.com/api/v1/colors/')
        const data = await response.json();
        const colors = data.colors;
        this.setState({ colors });
        this.setState({ loading: false });
      } catch (err) {
        console.error('Database currently experiencing diffiiculties. Please try again later.', err)
      }
    }
    getColors();
  }

  handleSearch = (searchColors) => {
    this.setState({ searchColors: searchColors })
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber })
  }


  render() {
    const { colors, currentPage, loading, searchColors } = this.state;

    return (
      <div className="App">
        <Home
          colors={colors}
          loading={loading}
          currentPage={currentPage}
          searchColors={searchColors}
          handleSearch={this.handleSearch}
          paginate={this.paginate} />
      </div>
    );
  }
}

export default App;
