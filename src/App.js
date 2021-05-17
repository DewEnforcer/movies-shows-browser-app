import { Redirect, Route, Switch } from 'react-router';

import LandingPage from './components/LandingPage';
import MovieDisplay from './components/MovieDisplay';
import MoviePlayer from './components/MoviePlayer';

import './App.css';
import SearchPage from './components/SearchPage';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="content">
          <Switch>
            <Route path="/movie" component={MovieDisplay}/>
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
