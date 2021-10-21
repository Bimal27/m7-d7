import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import Favourites from './components/Favourites';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={MainSearch} />
        <Route exact path='/favourites' component={Favourites} />
        <Route exact path='/:companyName' component={CompanySearchResults} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
