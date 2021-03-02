import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorsContextProvider from './context/ColorsContext';

/* PAGES */
import Home from './pages/Home/Home';
import ColorDetails from './pages/ColorDetails/ColorDetails';

/* STYLES */
import './App.css';
import Header from './components/header/Header.component';
import SideBar from './components/sidebar/SideBar.component';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     colors: [],
  //     searchColors: '',
  //     loading: false,
  //     currentPage: 1,
  //   }
  // }

  // componentDidMount() {
  //   const getColors = async () => {
  //     try {
  //       this.setState({ loading: true });
  //       const response = await fetch('https://my-colors-api.herokuapp.com/api/v1/colors/')
  //       const data = await response.json();
  //       const colors = data.colors;
  //       this.setState({ colors });
  //       this.setState({ loading: false });
  //     } catch (err) {
  //       console.error('Database currently experiencing diffiiculties. Please try again later.', err)
  //     }
  //   }
  //   getColors();
  // }

  // handleSearch = (searchColors) => {
  //   this.setState({ searchColors: searchColors })
  // }

  // paginate = (pageNumber) => {
  //   this.setState({ currentPage: pageNumber })
  // }


  render() {
    // const { colors, currentPage, loading, searchColors } = this.state;

    return (
      <ColorsContextProvider>
        <div className="App">
          <Header />
          <main className="content-container">
            <SideBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/colors/:id" component={ColorDetails} />
            </Switch>
          </main>
        </div>
      </ColorsContextProvider>
    );
  }
}

export default App;
