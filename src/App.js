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

const App = () => {
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

export default App;
