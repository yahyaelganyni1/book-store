import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
