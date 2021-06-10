import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home'
import PlayList from './containers/PlayList'
import Favorites from './containers/Favorites'
import Layout from './hoc/Layout'

function App() {
  return (
  <Router>
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/playlist/:id" component={PlayList} />
            <Route exact path='/favorites' component={Favorites} />
        </Switch>
    </Layout>
  </Router>
  );
}

export default App;
