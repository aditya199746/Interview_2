
import './App.css';
import Bids from './components/Bids';
import FirstComp from "./components/FirstComp"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      
        
        <Switch>
        <Route path="/bids" component={Bids} />
        <Route path="/" component={FirstComp} />

        </Switch>
      </BrowserRouter>
  );
}

export default App;
