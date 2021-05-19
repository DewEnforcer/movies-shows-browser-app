import { Redirect, Route, Switch } from 'react-router';

import LandingPage from './components/LandingPage';
import MovieDetails from './components/MovieDetails';
import MoviePlayer from './components/MoviePlayer';
import SearchPage from './components/SearchPage';
import Header from './components/header/Header';

import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const navItems = [
  {id: 1, path: "/", label: "Home"},
  {id: 2, path: "/search", label: "Search"},
]

function App() {
  return (
    <div className="App">
        <Header navItems={navItems}/>
        <div className="content">
          <ToastContainer/>
          <Switch>
            <Route path="/movie" component={MovieDetails}/>
            <Route path="/play/:id" component={MoviePlayer}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/" component={LandingPage}/>
            <Redirect from="/home" to="/"/>
          </Switch>
        </div>
    </div>
  );
}

export default App;
