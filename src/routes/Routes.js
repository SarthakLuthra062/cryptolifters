import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../views/About/About';
import Home from '../views/Home/Home';
import Inventory from '../views/Inventory/Inventory';
import RoadMap from '../views/RoadMap/RoadMap';
import Navbar from '../shared/components/Navbar/Navbar';

import WeightPacks from '../views/WeightPacks/WeightPacks';
import Whitepaper from '../views/Whitepaper.js/Whitepaper';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/pack" component={WeightPacks} />
        <Route path="/roadmap" component={RoadMap} />
        <Route path="/about" component={About} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/whitepaper" component={Whitepaper} />
        <Route path="/navbar" component={Navbar} />
      </Switch>
    </Router>
  );
};
