import React from 'react';
import Header from './components/header/Header.component';
import SideBar from './components/sidebar/SideBar.component';
import ColorsList from './components/colors-list/ColorsList.component';
import Pagination from './components/pagination/Pagination.component';

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
    const { colors, currentPage } = this.state;

    // Colors View (Pagination Magic)
    const colorsPerPage = 12;
    const indexOfLastColorSet = currentPage * colorsPerPage;
    const indexOfFirstColorSet = indexOfLastColorSet - colorsPerPage;
    const currentColors = colors.slice(indexOfFirstColorSet, indexOfLastColorSet);

    return (
      <div className="App">
        <Header
          searchFunction={this.handleSearch}
          searchField={this.state.searchColors} />
        <SideBar />
        <main className="content-container">
          <div className="showpiece"></div>
          <div className="list-view">
            <ColorsList
              // colorsList={this.state.colors}
              colorsList={currentColors}
              loading={this.state.loading}
              searchField={this.state.searchColors} />
            <Pagination
              colorsPerPage={colorsPerPage}
              allColors={this.state.colors.length}
              paginate={this.paginate} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
