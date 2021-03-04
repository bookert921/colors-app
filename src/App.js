import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorsContextProvider from './context/ColorsContext';

/* PAGES */
import Header from './components/header/Header.component';
import SideBar from './components/sidebar/SideBar.component';
import Home from './pages/Home/Home';
import ColorDetailsPage from './pages/ColorDetails/ColorDetailsPage';

/* STYLES */
import './App.css';

const App = () => {
  return (
    <ColorsContextProvider>
      <div className="App">
        <Header />
        <main className="content-container">
          <SideBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/colors/:id" component={ColorDetailsPage} />
          </Switch>
        </main>
      </div>
    </ColorsContextProvider>
  );
}

export default App;
